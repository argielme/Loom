const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const auth = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const connectDB = require("./config/db");

connectDB();

app.use("/auth", auth);
app.use("/auth-middleware", authMiddleware);

const port = 3000;

app.listen(port, () => {
  console.log(`Port: ${port}`);
});

app.get("/auth-middleware", authMiddleware, (req, res) => {
  res.json({
    message: "Token is valid!",
    user: req.user,
  });
});