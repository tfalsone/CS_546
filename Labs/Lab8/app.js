const express = require("express");
const app = express();
let configRoutes = require("./routes");
const bodyParser = require("body-parser");
const static = express.static(_dirname + "/public");
const exphbs = require("express-handlebars");

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(3000, () => {
    console.log("Server started");
    console.log("Your routes will be running on http://localhost:3000");
})