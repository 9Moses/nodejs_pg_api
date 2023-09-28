const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./src/routes/auth");
const cors = require("cors");

const app = express();
const port = 3000; // You can change this to your preferred port
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
