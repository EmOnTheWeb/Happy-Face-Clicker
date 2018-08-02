const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const mongoose = require('mongoose');
const app            = express();
const db             = require('./config/db');
const cors = require('cors');
const path = require('path');


mongoose.connect(db.url);

const facesController = require('./controllers/faces');
const port = 8000;

//Middleware for CORS
app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/faces',facesController);

app.use(express.static('client/dist/Happy-Face-Clicker/')); 

app.listen(port, () => {
  console.log('We are live on ' + port);
});