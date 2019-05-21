const express = require('express');
const app = express();
const User= require('../models/user');
// app.get('/usuario', (req, res) => {
//     res.json({
//         ok:true,
//         msg:"All ok"
//     });
// });
app.get("/User",(req,res)=>{
    User.find({
        state:true
    },(err,usuarioDB)=>{
        if(err){
            return res.status.json({
                ok:true,
                err
            })
        }
        res.status(200).json({
            ok:true,
            usuarioDB
        })
    }).populate('Rol');
});


app.post("/User",(req,res)=>{
    let body=req.body;
    let userGuardar=new User({
        name:body.name,
        lastname:body.lastname,
        email:body.email,
        password:body.password,
        age:body.age,
        rol:body.rol
    });

    userGuardar.save((err,usuarioDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                error:err

            })
        }
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                error:err
            })
        }
        res.status(200).json({
            ok:true,
            data:usuarioDB
        });
    });
});

app.put("/User/id",(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    let usuarioporEditar={
        name:body.name,
        lastname:body.lastname,
        email:body.email,
        password:body.password,
        age:body.age,
        rol:body.rol   
    }
    User.findByIdAndUpdate(id,usuarioporEditar,{
        new:true,
        runValidators:true
    },(req,res)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err

            })
        }
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.status(200).json({
            ok:true,
            data:usuarioDB
        });
    });
});

app.delete('/User/id',(req,res)=>{
    let id=req.params.id;
    let usuarioState={
        state:false
    }
    User.findByIdAndUpdate(id,usuarioState,{
        new:true,
        runValidators:true
    },(req,res)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err

            })
        }
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.status(200).json({
            ok:true,
            data:usuarioDB
        });
    });
});

module.exports = app;