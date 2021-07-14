const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JourneyDemandSchema = new Schema(
  {
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    journey: { type: mongoose.Schema.Types.ObjectId, ref: "Journey" },
    state: { type: String, default: "pending" }, //confirmed, pending, canceled
  },
  { timestamps: true }
);

module.exports = mongoose.model("JourneyDemand", JourneyDemandSchema);
