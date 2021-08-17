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
router.get(
  "/me",
  verifyToken,
  isActive,
  journeyDemandControllers.getOwnJourneyDemands
);
router.get(
  "/:journeyDemandId",
  verifyToken,
  journeyDemandControllers.getJourneyDemand
);
router.delete(
  "/:journeyDemandId",
  verifyToken,
  journeyDemandControllers.deleteJourneyDemand
);
router.put(
  "/:journeyDemandId",
  verifyToken,
  journeyDemandControllers.updateJourneyDemand
);
router.get(
  "/:journeyDemandId/confirm",
  verifyToken,
  journeyDemandControllers.confirmJourneyDemand
);
router.get(
  "/:journeyDemandId/cancel",
  verifyToken,
  journeyDemandControllers.cancelJourneyDemand
);
module.exports = router;
