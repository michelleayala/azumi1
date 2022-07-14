var usuario = require('../models/userModel');

 const registro_user = async function(req,res){
    var data = req.body;
    var usuarios_arr = [];
    
    usuarios_arr = await usuario.find({email:data.email});
    if(usuarios_arr.length == 0){
        var reg = await usuario.create(data);
        res.status(200).send({data:reg});
    }else{
        res.status(200).send({message:'El correo ya existe en la base datos',dato:undefined});
    }
 }

 const login_user = async function(req,res){
    var data = req.body;
    var user_arr = [];

    user_arr = await usuario.find({email:data.email});

    if(user_arr.length == 0){
        res.status(200).send({message:'No se encontro el correo', data:undefined});
    }else{
        let user = user_arr[0];

        if(user.password == data.email){
            res.status(200).send({data:user});
        }else{
            res.status(200).send({message:'La contraseña no coincide', data:undefined});
        }
    }

    
 }
      module.exports = {
        registro_user,
        login_user
    }
    



    
    

