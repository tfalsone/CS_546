const express = require("express");
const router = express.Router();
const data = require("../data");
const result = data.result

const constructorMethods = app => {
    app.get("/", (req, res) => {
        res.render("layouts/main", {});
    });

    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethods;