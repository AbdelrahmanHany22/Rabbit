const express = require('express');
const cors = require('cors');
require('dotenv').config({path: '../Config.env'});
const app = express();
const mongoose = require('mongoose');

const usermodels = require('./models/notificationModels');
//////////////////////////////////////////////////////////////////////////////


const uri = process.env.DATABASE_STRING;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


//////////////////////////////////////////////////////////////////////////////
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//////////////////////////////////////////////////////////////////////////////

app.use('/api/notification', usermodels);
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

module.exports = app;