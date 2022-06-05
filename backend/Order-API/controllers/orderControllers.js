const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const generalController = require('./generalControllers');
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

///////////////////////////////////////////////////////////////////////////////

const axios = require('axios').default;

///////////////////////////////////////////////////////////////////////////////

exports.createOrder = catchAsync(async (req, res, next) => {
    const b = {...req.body};
    b.user = req.user;

    const doc = await Order.create(b);

    try {

        await axios.post(`http://localhost:${process.env.NOTIFICATIONAPIPORT}/api/v1/notifications/confirmorder`, {
            email: req.user.email,
            orderid: doc._id,
            name: req.user.name,
            address: req.user.addressDescription,
            total: doc.price
        });

    } catch (e) {

        return next(new AppError('Error sending account confirmation.', 401));
    }

    res.status(201).json({
        status: "Success",
        data: doc,
    });
});

exports.getOrder = generalController.getOne(Order);
exports.getAllOrders = generalController.getAll(Order);

exports.changeOrderStatus = catchAsync(
    async (req, res, next) => {
        const id = req.params.id;
        const doc = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,

        });


        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        let user = doc.user.valueOf();

        try {

            user = await axios.get(`http://localhost:${process.env.DEVROUTESPORT}/api/v1/users/${user}`);

            req.user = user;


        } catch (e) {

            try {

                user = await axios.get(`http://localhost:${process.env.DEVROUTESPORT}/api/v1/guestusers/${user}`);

                req.user = user;


            } catch (e) {
                return next(new AppError('Error updating order.'));

            }

        }


        try {

            await axios.post(`http://localhost:${process.env.NOTIFICATIONAPIPORT}/api/v1/notifications/changestatus`, {
                status: doc.status,
                email: user.data.data.data.email,
                orderid: doc._id.valueOf(),
                name: user.data.data.data.name,
                address: user.data.data.data.addressDescription || user.data.data.data.addressCoordinates,
                total: doc.price
            });

        } catch (e) {

            return next(new AppError('Error sending order status.', 401));
        }

        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        });

    });


exports.getUserOrders = catchAsync(async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You are not logged in. Please log in to get access.', 401));
    }

    try {

        let user = await axios.get(`http://localhost:${process.env.DEVROUTESPORT}/api/v1/devroutes/${process.env.DEVROUTESKEY}/retrieveuser/${token}`);
        req.user = user.data.user;

        const orderIds = user.orderIds;

        let orders = await Order.find({'user': user.data.user._id});


        let result = [];
        for (let order of orders) {
            let products = await Cart.findById(order.cart.valueOf());
            if (products !== null) {
                order = order.toObject();
                order.products = products.products;
                result.push(order);
            }
        }


        res.status(200).json({
            status: 'success',
            orders: result,


        });


    } catch (e) {

        return next(new AppError('Error getting user Orders.', 500));
    }


});

/////////////////////////////////////////////////////////////////////////////////////////////
