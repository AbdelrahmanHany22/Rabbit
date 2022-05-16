const mongoose = require("mongoose");

//////////////////////////////////////////////////////////////////////////////

const app = require("./app");
require('dotenv').config({path: '../Config.env'});

//////////////////////////////////////////////////////////////////////////////


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION. Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

//////////////////////////////////////////////////////////////////////////////


const uri = process.env.DATABASE_STRING;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//////////////////////////////////////////////////////////////////////////////


const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//////////////////////////////////////////////////////////////////////////////

process.on('unhandledRejection', err => {
    console.log(err);
    console.log('UNHANDLED REJECTION. Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////