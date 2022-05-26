const Order = require('../models/orderModel');
const generalController = require('./generalControllers');

///////////////////////////////////////////////////////////////////////////////

exports.createOrder = generalController.createOne(Order);
exports.getOrder = generalController.getOne(Order);
exports.getAllOrders = generalController.getAll(Order);
exports.changeOrderStatus = generalController.updateOne(Order);

/////////////////////////////////////////////////////////////////////////////////////////////
