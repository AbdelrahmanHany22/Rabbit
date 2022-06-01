const Order = require('../models/orderModel');
const generalController = require('./generalControllers');
const catchAsync = require("../utils/catchAsync");

///////////////////////////////////////////////////////////////////////////////

exports.createOrder = catchAsync(async (req, res, next) => {
    const b = {...req.body};
    b.user = req.user;

    const doc = await Order.create(b);

    res.status(201).json({
        status: "Success",
        data: doc,
    });
});

exports.getOrder = generalController.getOne(Order);
exports.getAllOrders = generalController.getAll(Order);
exports.changeOrderStatus = generalController.updateOne(Order);

/////////////////////////////////////////////////////////////////////////////////////////////
