const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();
const PORT = process.env.DEV_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App server is running on port ${PORT}!`);
})
