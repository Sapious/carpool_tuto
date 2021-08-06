const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const JourneySchema = new Schema(
  {
    reference: { type: String, unique: true, index: true },
    destinationFrom: { type: String, lowercase: true },
    destinationTo: { type: String, lowercase: true },
    date: { type: Date },
    placeNumber: { type: Number },
    description: { type: String },
    price: { type: Number, default: 0 },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    state: { type: String, default: "active" }, //active, expired, canceled, completed
  },
  { timestamps: true }
);
JourneySchema.plugin(uniqueValidator, { message: "not unique" });

JourneySchema.pre("validate", function (next) {
  if (!this.reference) {
    this.generateReference();
  }
  next();
});

JourneySchema.methods.generateReference = function () {
  this.reference = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};
module.exports = mongoose.model("Journey", JourneySchema);
