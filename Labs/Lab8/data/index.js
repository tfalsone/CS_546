const resultRoutes = require("./result");
const mainRoutes = require("./main");

const constructorMethods = app => {
    app.use("/result", resultRoutes);
    app.use(("/"), mainRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = {
    result: require("./result"),
    main: require("./main")
};