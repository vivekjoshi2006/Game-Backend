require("dotenv").config();

const express = require("express");
const cors = require("cors");

const gameRoutes = require("./routes/gameRoutes");
app.use("/game", gameRoutes);

const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});