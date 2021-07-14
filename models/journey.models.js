const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JourneySchema = new Schema(
  {
    destinationFrom: { type: String },
    destinationTo: { type: String },
    date: { type: Date },
    placeNumber: { type: Number },
    description: { type: String },
    price: { type: Number, default: 0 },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    state: { type: String, default: "active" }, //active, expired, canceled
  },
  { timestamps: true }
);

module.exports = mongoose.model("Journey", JourneySchema);
