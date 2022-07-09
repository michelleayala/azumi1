var express = require('express');
var userController = requiere('../controlles/userController');

var api = express.Router();

api.post('/registro_usuario',userController.registro_usuario);