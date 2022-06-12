const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////


const orderControllers = require('../controllers/orderControllers');
const authController = require('../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(orderControllers.getAllOrders)
    .post(authController.protect, authController.protectGuest, orderControllers.createOrder);

router.route('/:id')
    .get(orderControllers.getOrder)
    .patch(orderControllers.changeOrderStatus);


router.route('/getmyorders/orders')
    .get(orderControllers.getUserOrders);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
