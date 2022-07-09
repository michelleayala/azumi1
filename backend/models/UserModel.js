var sesionesModel = {}
var dator = {}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//La estructura para una coleccion
var UserSchema = new Schema ({
    nombre:String,
    email:String,
    password:String,
    perfil:String,
})

//creacion del modelo o diseño 
const MyModel = mongoose.model('usuario',UserSchema)

sesionesModel.registro = function(post,callback){
    
    const instancia = new MyModel
    instancia.nombre = post.nombre
    instancia.email = post.email
    instancia.password = post.password
    instancia.perfil = post.password
    
    //guardar la instancia en la base de datos
    instancia.save((err,usercreate) => {
        if (err){
            console.log(err)
            return callback({state:false,info:err})
        }else{
            console.log(usercreate)
            return callback({state:true,info:usercreate})
        }
    })
}

