const express = require("express");
const orderControllers = require('../controllers/orderControllers');

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(orderControllers.getAllOrders)
    .post(orderControllers.createOrder);

router.route('/:orderid')
    .get(orderControllers.getOrder)
    .patch(orderControllers.changeOrderStatus);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
