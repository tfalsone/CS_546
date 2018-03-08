const recipeRoutes = require("./recipes");

const constructorMethods = app => {
    app.use("/recipes", recipeRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethods;