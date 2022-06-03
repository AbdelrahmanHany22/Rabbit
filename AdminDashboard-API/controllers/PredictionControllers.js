const Prediction = require('../models/SingleOrderProducts');
const generalController = require('./generalControllers')
const catchAsync = require("../utils/catchAsync");



/////////////////////////////////////////////////////////////

exports.createPrediction = catchAsync(async (req, res, next) => {

    res.status(201).json({
        status: "Success",
        data: doc,
    });

});

//////////////////////////////////////////////////////////////////

exports.getAllPredictions= generalController.getAll(Prediction);
