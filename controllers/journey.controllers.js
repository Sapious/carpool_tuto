const Journey = require("../models/journey.models");

const getJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find();
    return res.status(200).json({ journeys: journeys });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getJourney = async (req, res) => {
  const id = req.params.journeyId;
  try {
    const journey = await Journey.findById(id);
    return res.status(200).json({ journey: journey });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createJourney = async (req, res) => {
  const newJourney = new Journey({
    destinationFrom: req.body.destinationFrom,
    destinationTo: req.body.destinationTo,
    date: req.body.date,
    placeNumber: req.body.placeNumber,
    description: req.body.description,
    price: req.body.price,
    driver: req.verifiedUser._id,
  });
  try {
    const savedJourney = await newJourney.save();
    return res.status(200).json({ journey: savedJourney });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const updateJourney = async (req, res) => {
  const data = { ...req.body };
  const id = req.params.journeyId;
  try {
    const updatedJourney = await Journey.findByIdAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).json({ journey: updatedJourney });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const deleteJourney = async (req, res) => {
  const id = req.params.journeyId;
  try {
    const deleteJourney = await Journey.findByIdAndDelete(id);
    return res.status(200).json({ journey: deleteJourney });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getJourneys = getJourneys;
module.exports.getJourney = getJourney;
module.exports.createJourney = createJourney;
module.exports.updateJourney = updateJourney;
module.exports.deleteJourney = deleteJourney;
