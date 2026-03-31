exports.socialLogin = async (req, res) => {
  try {
    res.json({ message: "Test route working" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};