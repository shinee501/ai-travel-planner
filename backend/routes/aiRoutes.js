const express = require("express");
const router = express.Router();

const {
  generateItinerary,
  regenerateDay,
} = require("../controllers/aiController");

const protect = require("../middleware/auth");

router.post(
  "/generate-itinerary",
  protect,
  generateItinerary
);
router.post(
  "/regenerate-day",
  protect,
  regenerateDay
);
module.exports = router;