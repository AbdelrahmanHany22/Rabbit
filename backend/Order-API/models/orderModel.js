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
    price: {
        type: Number,
        required: [true, 'An Order has to have a price']
    },
    status: {
        type: String,
        default: 'CREATED',
        enum: ['CREATED', 'PROCESSING', 'SHIPPING', 'FULFILLED', 'CANCELED'],
    },
    date: {
        type: String,
        default: Date.now().toLocaleString('en-US')
    }

});

//////////////////////////////////////////////////////////////////////////////
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;