const Cart = require('../models/cartModel');
const generalController = require('./generalControllers');
const catchAsync = require("../utils/catchAsync");

///////////////////////////////////////////////////////////////////////////////

exports.createCart =
    catchAsync(async (req, res, next) => {

        const b = {...req.body};
        b.user = req.user;

        const doc = await Cart.create(b);

        res.status(201).json({
            status: "Success",
            token: req.token,
            data: doc,
        });
    });

exports.getCart = generalController.getOne(Cart);
exports.deleteCart = generalController.deleteOne(Cart);
exports.getAllCarts = generalController.getAll(Cart);

/////////////////////////////////////////////////////////////////////////////////////////////
