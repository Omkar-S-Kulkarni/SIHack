const { getUsersConnection } = require("../config/db");
const getUserModel = require("../models/userModel");

// Create user
async function createUser(req, res) {
  try {
    const conn = getUsersConnection();
    const User = getUserModel(conn);

    // ⬇️ Changed fields to match new schema
    const {
      firstName,
      lastName,
      role,
      designation, // optional
      mobileNumber, // unique key
      address,
      password, // should be hashed before save
      state,
    } = req.body;

    const doc = await User.create({
      firstName,
      lastName,
      role,
      designation,
      mobileNumber,
      address,
      password,
      state,
    });

    return res.json({ ok: true, user: doc });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ ok: false, message: "server error", error: err.message });
  }
}

// List users
async function listUsers(req, res) {
  try {
    const conn = getUsersConnection();
    const User = getUserModel(conn);

    // ⬇️ No change except schema fields are different
    const users = await User.find().limit(100);

    return res.json({ ok: true, users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "server error" });
  }
}

// Get single user (by mobileNumber instead of id)
async function getUser(req, res) {
  try {
    const conn = getUsersConnection();
    const User = getUserModel(conn);

    // ⬇️ Changed to search by mobileNumber (unique key)
    const user = await User.findOne({ mobileNumber: req.params.mobileNumber });

    if (!user) return res.status(404).json({ ok: false, message: "Not found" });
    return res.json({ ok: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "server error" });
  }
}

// Update user (by mobileNumber)
async function updateUser(req, res) {
  try {
    const conn = getUsersConnection();
    const User = getUserModel(conn);
    const updates = req.body;

    // ⬇️ Changed to update by mobileNumber
    const updated = await User.findOneAndUpdate(
      { mobileNumber: req.params.mobileNumber },
      updates,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ ok: false, message: "Not found" });

    return res.json({ ok: true, user: updated });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "server error" });
  }
}

// Delete user (by mobileNumber)
async function deleteUser(req, res) {
  try {
    const conn = getUsersConnection();
    const User = getUserModel(conn);

    // ⬇️ Changed to delete by mobileNumber
    const removed = await User.findOneAndDelete({
      mobileNumber: req.params.mobileNumber,
    });

    if (!removed)
      return res.status(404).json({ ok: false, message: "Not found" });

    return res.json({ ok: true, message: "Deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "server error" });
  }
}

module.exports = { createUser, listUsers, getUser, updateUser, deleteUser };
