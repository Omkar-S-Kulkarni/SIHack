const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  createdAt: { type: Date, default: Date.now },
});

locationSchema.index({ location: "2dsphere" });

function getLocationModel(conn) {
  try {
    return conn.model("Location");
  } catch (e) {
    return conn.model("Location", locationSchema);
  }
}

module.exports = getLocationModel;
