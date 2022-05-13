
const express = require('express');
const cors = require('cors');
require('dotenv').config({path:'../Config.env'});
const app = express();

app.use(cors());
app.use(express.json());
module.exports = app;