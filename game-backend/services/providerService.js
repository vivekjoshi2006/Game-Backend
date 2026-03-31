const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyProviderToken = async (provider, token) => {
  if (provider === "google") {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };
  }

  throw new Error("Unsupported provider");
};

module.exports = { verifyProviderToken };