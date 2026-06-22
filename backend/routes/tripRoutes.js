const express = require("express");
const router = express.Router();

const {
  createTrip,
  getTrips,
  deleteTrip,
  updateTrip,
} = require("../controllers/tripController");

const protect = require("../middleware/auth");

router.post("/", protect, createTrip);
router.get("/", protect, getTrips);
router.delete("/:id", protect, deleteTrip);
router.put("/:id", protect, updateTrip);

module.exports = router;