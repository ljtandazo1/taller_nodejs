//require('.config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000

// ===========
// MiddleWare
//============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false

}));
app.use(require('./routes/index'));

mongoose.connect('mongodb://localhost:27017/sga', { useNewUrlParser: true }, (err, res) => {
    if (err) throw error;
    console.log(`Mongo is working ${6 +7}`)
});
app.listen(port, () => console.log(`running in the port ${port}`));