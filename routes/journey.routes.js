const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const journeyControllers = require("../controllers/journey.controllers");
const isActive = require("../middlewares/isActive");

router.post("/", verifyToken, isActive, journeyControllers.createJourney);
router.get("/", journeyControllers.getJourneys);
router.get("/:journeyId", journeyControllers.getJourney);
router.delete("/:journeyId", journeyControllers.deleteJourney);
router.put("/:journeyId", journeyControllers.updateJourney);

module.exports = router;
