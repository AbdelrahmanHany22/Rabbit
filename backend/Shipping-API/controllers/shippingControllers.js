const Shipment = require('../models/shippingModel');
const generalController = require('./generalControllers');

///////////////////////////////////////////////////////////////////////////////

exports.createShipment = generalController.createOne(Shipment);
exports.getShipment = generalController.getOne(Shipment);
exports.getAllShipments = generalController.getAll(Shipment);
exports.updateShipmentData = generalController.updateOne(Shipment);
/////////////////////////////////////////////////////////////////////////////////////////////
