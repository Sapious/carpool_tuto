const JourneyDemand = require("../models/journeyDemande.models");

const getOwnJourneyDemands = async (req, res) => {
  try {
    const journeyDemands = await JourneyDemand.find({
      $and: [
        { driver: req.verifiedUser._id },
        { passenger: req.verifiedUser._id },
      ],
    })
      .populate("journey")
      .populate("driver")
      .populate("passenger");

    return res.status(200).json({ journeyDemands: journeyDemands });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getJourneyDemand = async (req, res) => {
  const id = req.params.journeyDemandId;
  try {
    const journeyDemand = await JourneyDemand.findById(id);
    return res.status(200).json({ journeyDemand: journeyDemand });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createJourneyDemand = async (req, res) => {
  const newJourneyDemand = new JourneyDemand({
    journey: req.body.journey,
    passenger: req.verifiedUser._id,
    driver: req.body.driver,
  });
  try {
    const savedJourneyDemand = await newJourneyDemand.save();
    return res.status(200).json({ journeyDemand: savedJourneyDemand });
  } catch (err) {
    return res.status(500).json(err);
  }
};
//TODO: confirm journeyDemand
//TODO: cancel journeyDemand
const updateJourneyDemand = async (req, res) => {
  const data = { ...req.body };
  const id = req.params.journeyDemandId;
  try {
    const updatedJourneyDemand = await JourneyDemand.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );
    return res.status(200).json({ journeyDemand: updatedJourneyDemand });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const deleteJourneyDemand = async (req, res) => {
  const id = req.params.journeyDemandId;
  try {
    const deleteJourneyDemand = await JourneyDemand.findByIdAndDelete(id);
    return res.status(200).json({ journeyDemand: deleteJourneyDemand });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getOwnJourneyDemands = getOwnJourneyDemands;
module.exports.getJourneyDemand = getJourneyDemand;
module.exports.createJourneyDemand = createJourneyDemand;
module.exports.updateJourneyDemand = updateJourneyDemand;
module.exports.deleteJourneyDemand = deleteJourneyDemand;
