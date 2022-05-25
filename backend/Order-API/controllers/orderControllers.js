const Order = require('../models/orderModel');
const generalController = require('./generalControllers');
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

///////////////////////////////////////////////////////////////////////////////

exports.createOrder = generalController.createOne(Order);
exports.getOrder = generalController.getOne(Order);
exports.getAllOrders = generalController.getAll(Order);

exports.changeOrderStatus = catchAsync(async (req, res, next) => {

    const orderid = req.params.orderid;
    const doc = await Order.findByIdAndUpdate(orderid, req.body, {
        new: true,
        runValidators: true,
    });

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    });

});

/////////////////////////////////////////////////////////////////////////////////////////////
