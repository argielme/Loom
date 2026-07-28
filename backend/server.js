const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const auth = require("./routes/auth");
const connectDB = require("./config/db");

connectDB();

app.use("/auth", auth);

const port = 3000;

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
