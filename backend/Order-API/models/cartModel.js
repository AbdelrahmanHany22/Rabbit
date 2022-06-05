const mongoose = require('mongoose');


//////////////////////////////////////////////////////////////////////////////

const cartSchema = mongoose.Schema({
    user: {

        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    price: {
        type: Number,
        required: [true, 'A Cart has to have a price']
    },
    products: []
});

//////////////////////////////////////////////////////////////////////////////

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;