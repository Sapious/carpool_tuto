const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const journeyControllers = require("../controllers/journey.controllers");
const isActive = require("../middlewares/isActive");
const isDriver = require("../middlewares/isDriver");
router.post(
  "/",
  verifyToken,
  isActive,
  isDriver,
  journeyControllers.createJourney
);
router.get("/", journeyControllers.getJourneys);
router.get("/me", verifyToken, isActive, journeyControllers.getOwnJourneys);
router.get(
  "/:journeyId/cancel",
  verifyToken,
  isActive,
  journeyControllers.cancelJourney
);
router.get("/:journeyId", journeyControllers.getJourney);
router.delete(
  "/:journeyId",
  verifyToken,
  isActive,
  journeyControllers.deleteJourney
);
router.put(
  "/:journeyId",
  verifyToken,
  isActive,
  journeyControllers.updateJourney
);

module.exports = router;
