const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////


const orderControllers = require('../controllers/orderControllers');
const authController = require('../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(authController.protect, authController.restrictTo('admin'), orderControllers.getAllOrders)
    .post(authController.protect, authController.protectGuest, orderControllers.createOrder);

router.route('/:id')
    .get(orderControllers.getOrder)
    .patch(orderControllers.changeOrderStatus);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
