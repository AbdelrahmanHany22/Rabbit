const catchAsync = require("../utils/catchAsync");
const EmailModel = require('./../models/notificaionModels');
const AppError = require('./../utils/appError');

const sendEmail = require('./models/notificationModels')
const generalControllers = require('./generalControllers');
const res = require("express/lib/response");
/////////////////////////////////////////////////////////////////////////////////////////////

exports.getMe = (req, res, next) => {
    req.params.id = req.guest.id;

    next();
};



exports.getAllEmails = generalController.getAll(EmailModel);
exports.getEmail = generalController.getOne(EmailModel);
exports.deleteGuest = generalController.deleteOne(EmailModel);