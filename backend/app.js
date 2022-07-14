var express = require('express')
var bodyparser = require('body-parser');
var config = require('./config.js').config
global.app = express();
var mongoose = require('mongoose');

var user_route = require('./routes/user');

mongoose.connect('mongodb://127.0.0.1:27017/'+ config.db,{useNewUrlParser:true,useUnifiedTopology:true},(err,res)=>{
    if(err){
        console.log(err)
    }else{ 
        console.log('conexion a mongo exitosa')
    }
})

app.use(bodyparser.json()); //support json encoded bodies
app.use(bodyparser.urlencoded({extended:true})); //support encoded bodies

//app.use('/',express.static(__dirname + '/pagina'))

app.listen(config.puerto,function(){
    console.log('servidor funcionando por el puerto' + config.puerto)
})

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',user_route);

module.exports = app;