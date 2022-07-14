var express = require ('express');
var userController = require('../controlles/userController')

var api = express.Router();

api.post('/registro_user',userController.registro_user);

api.post('/login_user',userController.login_user);

module.exports = api;

