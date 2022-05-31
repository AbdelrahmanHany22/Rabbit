const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const shippingControllers = require('../controllers/shippingControllers');
const authControllers = require('../controllers/authController');
/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(authControllers.protect, authControllers.restrictTo('admin'), shippingControllers.getAllShipments)
    .post(authControllers.protect, shippingControllers.createShipment);

router.route('/:id')
    .get(authControllers.protect, authControllers.restrictTo(['user', 'admin']), shippingControllers.getShipment)
    .patch(authControllers.protect, shippingControllers.updateShipmentData);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
