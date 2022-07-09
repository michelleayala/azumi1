var user = require('../models/UserModel');

const registro_usuario = async function(req,res){
    res.status (200).send({message:'Hola mundo'});
}

module.exports = {
    registro_usuario
}
