const express = require('express');
const app = express();
const Rol= require('../models/rol');


app.get('/Rol',(req,res)=>{
    Rol.find().exec((err,rolDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        res.status(400).json({
            ok:true,
            rolDB
        })
    });

});

app.post('/Rol',(req,res)=>{
    let body=req.body;
    let rolParaGuardar=new Rol({
        name:body.name,
        description:body.description
    });
    rolParaGuardar.save((err,rolDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!rolDB){
            return res.status(400).json({
                ok:false,
                rolDB
            });
        }
        res.status(200).json({
            ok:true,
            rolDB
        })
    });
});

app.put("/Rol/id",(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    let RolporEditar={
        name:body.name,
        description:body.description,   
    }
    User.findByIdAndUpdate(id,RolporEditar,{
        new:true,
        runValidators:true
    },(req,res)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!rolDB){
            return res.status(400).json({
                ok:false,
                rolDB
            })
        }
        res.status(200).json({
            ok:true,
            rolDB
        })
    })
});

app.delete('/Rol/id',(req,res)=>{
    let id=req.params.id;
    let rolState={
        state:false
    }
    User.findByIdAndUpdate(id,rolState,{
        new:true,
        runValidators:true
    },(req,res)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!rolDB){
            return res.status(400).json({
                ok:false,
                rolDB
            })
        }
        res.status(200).json({
            ok:true,
            rolDB
        });
    });
});
module.exports=app;