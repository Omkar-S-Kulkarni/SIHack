const { getUsersConnection } = require('../config/db');
const getUserModel = require('../models/userModel');
const { saveOtpFor, verifyOtp } = require('../utils/otpService');
const { sendEmail, sendSmsViaTwilio } = require('../utils/senders');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

// Signup: create user record and send OTP to phone/email
async function signup(req, res) {
/* Expected body: { name, state, district, phoneNumber, email? } */
try {
const { name, state, district, phoneNumber } = req.body;
if (!phoneNumber || !name) return res.status(400).json({ ok: false, message: 'name and phoneNumber required' });

const conn = getUsersConnection();
const User = getUserModel(conn);

// Create if not exists
let user = await User.findOne({ phoneNumber });
if (!user) {
user = await User.create({ id: uuidv4(), name, state, district, phoneNumber });
}

// Save OTP
const { key, otp, expiresAt } = saveOtpFor(phoneNumber);

// Send OTP (demo): email or SMS
// Prefer SMS if phoneNumber present
await sendSmsViaTwilio(phoneNumber, `Your OTP is ${otp}`);
// Optionally email too: await sendEmail(email, 'Your OTP', `OTP: ${otp}`)

return res.json({ ok: true, message: 'OTP sent', otpKey: key, expiresAt });
} catch (err) {
console.error(err);
return res.status(500).json({ ok: false, message: 'server error' });
}
}


// Verify OTP and issue JWT
async function verifyOtpAndIssueToken(req, res) {
/* body: { otpKey, otp, phoneNumber } */
try {
const { otpKey, otp, phoneNumber } = req.body;
if (!otpKey || !otp || !phoneNumber) return res.status(400).json({ ok: false, message: 'otpKey, otp and phoneNumber required' });

const ok = verifyOtp(otpKey, otp, phoneNumber);
if (!ok.ok) return res.status(400).json({ ok: false, message: 'OTP invalid or expired', reason: ok.reason });

// Issue JWT
const conn = getUsersConnection();
const User = getUserModel(conn);
const user = await User.findOne({ phoneNumber });
if (!user) return res.status(404).json({ ok: false, message: 'User not found' });

const token = jwt.sign({ id: user.id, phoneNumber: user.phoneNumber, name: user.name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

return res.json({ ok: true, token, user: { id: user.id, name: user.name, phoneNumber: user.phoneNumber } });
} catch (err) {
console.error(err);
return res.status(500).json({ ok: false, message: 'server error' });
}
}

// Login route that just requests OTP again (same as signup flow)
async function loginRequestOtp(req, res) {
try {
const { phoneNumber } = req.body;
if (!phoneNumber) return res.status(400).json({ ok: false, message: 'phoneNumber required' });
const conn = getUsersConnection();
const User = getUserModel(conn);
const user = await User.findOne({ phoneNumber });
if (!user) return res.status(404).json({ ok: false, message: 'User not found' });

const { key, otp, expiresAt } = saveOtpFor(phoneNumber);
await sendSmsViaTwilio(phoneNumber, `Your login OTP is ${otp}`);
return res.json({ ok: true, message: 'OTP sent', otpKey: key, expiresAt });
} catch (err) {
console.error(err);
return res.status(500).json({ ok: false, message: 'server error' });
}
}

module.exports = { signup, verifyOtpAndIssueToken, loginRequestOtp };