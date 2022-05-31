const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////


const orderControllers = require('../controllers/orderControllers');
const authController = require('../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(authController.protect, authController.restrictTo('admin'), orderControllers.getAllOrders)
    .post(authController.protect, authController.restrictTo('user'), orderControllers.createOrder);

router.route('/:id')
    .get(authController.protect, authController.restrictTo('user'),orderControllers.getOrder)
    .patch(orderControllers.changeOrderStatus);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
