const express = require("express");
const app = express();
let configRoutes = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("Server started");
    console.log("Your routes will be running on http://localhost:3000");
  });