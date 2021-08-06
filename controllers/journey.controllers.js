const Journey = require("../models/journey.models");

const getJourneys = async (req, res) => {
  const queries = { ...req.query };
  const mongoQuery = {
    destinationFrom: queries.destinationFrom && queries.destinationFrom,
    destinationTo: queries.destinationTo && queries.destinationTo,
    price:
      queries.minPrice || queries.maxPrice
        ? { $gte: !queries.minPrice || 0, $lte: !queries.maxPrice || 9999999 }
        : { $gte: 0 },
    placeNumber: queries.placeNumber
      ? { $gte: queries.placeNumber }
      : { $gte: 1 },
    date: { $gte: new Date(queries.date) },
  };
  try {
    const journeys = await Journey.find(mongoQuery).populate({
      path: "driver",
      select: "firstName lastName",
    });
    return res.status(200).json({ journeys: journeys });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getOwnJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find({ driver: req.verifiedUser._id });
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

const cancelJourney = async (req, res) => {
  const id = req.params.journeyId;
  try {
    const canceledJourney = await Journey.findByIdAndUpdate(
      id,
      { state: "canceled" },
      {
        new: true,
      }
    );
    return res.status(200).json({ journey: canceledJourney });
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.getJourneys = getJourneys;
module.exports.getJourney = getJourney;
module.exports.createJourney = createJourney;
module.exports.updateJourney = updateJourney;
module.exports.deleteJourney = deleteJourney;
module.exports.getOwnJourneys = getOwnJourneys;
module.exports.cancelJourney = cancelJourney;
