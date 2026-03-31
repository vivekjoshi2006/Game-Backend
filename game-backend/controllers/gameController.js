const User = require("../models/User");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.userId);

  res.json({
    username: user.username,
    email: user.email,
    coins: user.coins,
    level: user.level,
    stamina: user.stamina,
  });
};

exports.addCoins = async (req, res) => {
  const { amount } = req.body;

  const user = await User.findById(req.userId);
  user.coins += amount;

  await user.save();

  res.json({ coins: user.coins });
};

exports.useStamina = async (req, res) => {
  const { amount } = req.body;

  const user = await User.findById(req.userId);

  if (user.stamina < amount) {
    return res.status(400).json({ error: "Not enough stamina" });
  }

  user.stamina -= amount;
  await user.save();

  res.json({ stamina: user.stamina });
};