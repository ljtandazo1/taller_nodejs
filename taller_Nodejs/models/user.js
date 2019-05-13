const mongoose =require('mongoose')
//const uniquevalidator=require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let userschema=new Schema({
    nombre:{
        type:String
    },
    apellido:{
        type:String
    },
    edad:{
        type:Number
    }
});

module.exports =mongoose.model('User',userschema);