var express = require('express')
var bodyparser = require('body-parser');
var config = require('./config.js').config
global.app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/'+ config.db,{useNewUrlParser:true,useUnifiedTopology:true},(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log('conexion a mongo exitosa')
    }
})

require('./routes/user')

app.use(bodyparser.json()); //support json encoded bodies
app.use(bodyparser.urlencoded({extended:true})); //support encoded bodies

app.use('/',express.static(__dirname + '/pagina'))

app.listen(config.puerto,function(){
    console.log('servidor funcionando por el puerto'+ config.puerto)
})

