const mongoose =require('mongoose')
const uniquevalidator=require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let userschema=new Schema({
    name:{
        type:String,
        required:[true,"El nombre es requerido"]
    },
    lastname:{
        type:String,
        required:[true,"El apellido es requerido"]
    },
    email:{
        type:String,
        required:[true,"El correo es requerido"]
    },
    password:{
        type:String,
        required:[true,"La contraseña es requerido"]
    },
    age:{
        type:Number
    },
    rol:{
        type:Schema.Types.ObjectId,
        ref:'Rol',
        required:[true,"El Rol es requerido"]
    },
    state:{
        type:Boolean,
        default:true
    }

});
userschema.methods.toJSON=function(){
    let user=this;
    let user_object=user.toObject();
    delete user_object.password;
    return user_object
};

userschema.plugin(uniquevalidator,{
    message:'{PATH}debe ser unico'
})
module.exports =mongoose.model('User',userschema);