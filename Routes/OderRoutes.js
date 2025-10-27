const routes = require('express').Router();
const zerodhaController = require('../Controllers/ZerodhaController');
const Authenticat = require("../Middlewares/AuthMiddleware");
routes.use(Authenticat.authenticateToken);

routes.get('/orders', zerodhaController.GetOrders);
routes.get('/orders/normalize', zerodhaController.NormalizeOrders);

module.exports = routes;