const express = require("express");
const shippingControllers = require('../controllers/shippingControllers');

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(shippingControllers.getAllShipments)
    .post(shippingControllers.createShipment);

router.route('/:id')
    .get(shippingControllers.getShipment)
    .patch(shippingControllers.updateShipmentData);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
