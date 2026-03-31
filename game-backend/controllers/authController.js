const User = require("../models/User");
const { verifyProviderToken } = require("../services/providerService");
const { createJWT } = require("../services/jwtService");

exports.socialLogin = async (req, res) => {
  try {
    const { provider, token } = req.body;

    const profile = await verifyProviderToken(provider, token);

    let user = await User.findOne({ provider_id: profile.id });

    if (!user) {
      user = await User.create({
        username: profile.name,
        email: profile.email,
        provider,
        provider_id: profile.id,
        avatar: profile.picture,
      });
    }

    const sessionToken = createJWT(user._id);

    res.json({
      session_token: sessionToken,
      user_id: user._id,
    });

  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Login failed" });
  }
};