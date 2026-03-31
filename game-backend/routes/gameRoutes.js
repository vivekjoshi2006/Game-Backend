const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  getProfile,
  addCoins,
  useStamina
} = require("../controllers/gameController");

router.get("/profile", authMiddleware, getProfile);
router.post("/add-coins", authMiddleware, addCoins);
router.post("/use-stamina", authMiddleware, useStamina);

module.exports = router;