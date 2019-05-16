const mongoose =require('mongoose')
let Schema =mongoose.Schema;

let rolSchema =new Schema({
    name:{
        type:String,
        required:[true,"El nombre debe ser requerido"]
    },
    description:{
        type:String,
        required:[true,"Descripcion debe ser requerido"]

    }
});
module.exports =mongoose.model('Rol',rolSchema);