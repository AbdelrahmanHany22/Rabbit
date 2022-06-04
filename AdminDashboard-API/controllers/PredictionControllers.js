const Prediction = require('../models/SingleOrderProducts');
const generalController = require('./generalControllers')
const catchAsync = require("../utils/catchAsync");
const axios = require("axios").default;
const AppError = require('../utils/appError');


/////////////////////////////////////////////////////////////

exports.createPrediction = catchAsync(async (req, res, next) => {
    let predictions;
    try {
        predictions = axios.get("http://127.0.0.1:8000/productassociations");
    } catch (error) {
        next(new AppError('Error occured while making predictions.',500));
    }
    res.status(201).json({
        status: "Success",
        data: predictions,
    });

});

//////////////////////////////////////////////////////////////////

exports.getAllPredictions= generalController.getAll(Prediction);
