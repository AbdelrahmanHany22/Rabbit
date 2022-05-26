const mongoose = require('mongoose');


//////////////////////////////////////////////////////////////////////////////


const shipmentSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    deliveryAgent: {
        type: mongoose.Schema.ObjectId,
        ref: 'DeliveryAgent',
        required: true
    },
    coordinatesOfCurrentLocation: [Number]
});

//////////////////////////////////////////////////////////////////////////////
const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;