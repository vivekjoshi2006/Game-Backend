const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,

  provider: String, // google, facebook
  provider_id: String,

  avatar: String,

  coins: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  stamina: { type: Number, default: 100 },

  ownedItems: [{ type: String }],
  
  purchaseHistory: [
    {
      item: String,
      price: Number,
      date: { type: Date, default: Date.now }
    }
  ],

  isSubscribed: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);