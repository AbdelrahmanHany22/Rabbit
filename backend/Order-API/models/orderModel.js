const mongoose = require('mongoose');


//////////////////////////////////////////////////////////////////////////////


const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    cart: {
        type: mongoose.Schema.ObjectId,
        ref: 'Cart',
        required: true
    },
    status: {
        type: String,
        default: 'CREATED',
        enum: ['CREATED', 'PROCESSING', 'SHIPPING', 'FULFILLED', 'CANCELED'],
    }

});

//////////////////////////////////////////////////////////////////////////////
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;