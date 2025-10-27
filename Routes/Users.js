const routes = require('express').Router();
const userController = require('../Controllers/UserController');    

routes.post('/login', userController.Login);
routes.post('/logout', userController.Logout);

module.exports = routes;