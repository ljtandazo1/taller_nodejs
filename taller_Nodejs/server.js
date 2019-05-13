const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
// ===========
// MiddleWare
//============
app.use(bodyParser.json());
app.use(require('./routes/index'));

app.use(bodyParser.urlencoded({
    extended: false

}));

mongoose.connect('mongodb://localhost:27017/sga',{
    useNewUrlParser:true

},(err,res)=>{
    if(err) throw error;
    console.log(`Mongo is working ${6+7}`);
});