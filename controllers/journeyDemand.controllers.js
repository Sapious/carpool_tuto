const JourneyDemand = require("../models/journey.models");

const getJourneyDemands = async (req, res) => {
  try {
    const journeyDemands = await JourneyDemand.find();
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
    driver: req.verifiedUser._id,
  });
  try {
    const savedJourneyDemand = await newJourneyDemand.save();
    return res.status(200).json({ journeyDemand: savedJourneyDemand });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const updateJourneyDemand = async (req, res) => {
  const data = { ...req.body };
  const id = req.params.journeyDemandId;
  try {
    const updatedJourneyDemand = await JourneyDemand.findByIdAndUpdate(id, data, {
      new: true,
    });
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

module.exports.getJourneyDemands = getJourneyDemands;
module.exports.getJourneyDemand = getJourneyDemand;
module.exports.createJourneyDemand = createJourneyDemand;
module.exports.updateJourneyDemand = updateJourneyDemand;
module.exports.deleteJourneyDemand = deleteJourneyDemand;
