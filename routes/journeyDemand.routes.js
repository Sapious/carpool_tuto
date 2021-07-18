const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const journeyDemandControllers = require("../controllers/journeyDemand.controllers");
const isActive = require("../middlewares/isActive");

router.post(
  "/",
  verifyToken,
  isActive,
  journeyDemandControllers.createJourneyDemand
);
router.get("/", journeyDemandControllers.getJourneyDemands);
router.get("/:journeyDemandId", journeyDemandControllers.getJourneyDemand);
router.delete(
  "/:journeyDemandId",
  journeyDemandControllers.deleteJourneyDemand
);
router.put("/:journeyDemandId", journeyDemandControllers.updateJourneyDemand);

module.exports = router;
