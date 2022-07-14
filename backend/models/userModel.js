var sesionesModel = {}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//La estructura para una coleccion
var UserSchema = new Schema ({
    nombre:String,
    email:String,
    password:String,
    perfil:String,
})

 module.exports = mongoose.model('usuario',UserSchema);