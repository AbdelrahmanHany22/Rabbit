const Cart = require('../models/cartModel');
const generalController = require('./generalControllers');

///////////////////////////////////////////////////////////////////////////////

exports.createCart = generalController.createOne(Cart);
exports.getCart = generalController.getOne(Cart);
exports.deleteCart = generalController.deleteOne(Cart);
exports.getAllCarts = generalController.getAll(Cart);

/////////////////////////////////////////////////////////////////////////////////////////////
