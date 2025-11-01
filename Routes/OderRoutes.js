const express = require("express");
const routes = express.Router();
const zerodhaController = require("../Controllers/ZerodhaController");
const Authenticat = require("../Middlewares/AuthMiddleware");


routes.get(
    "/orders",
    Authenticat.authenticateToken,  // Protected route
    zerodhaController.GetOrders
);

routes.get(
    "/orders/normalize",
    Authenticat.authenticateToken,  // Protected route
    zerodhaController.NormalizeOrders
);

module.exports = routes;
