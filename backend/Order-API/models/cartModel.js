const mongoose = require('mongoose');


//////////////////////////////////////////////////////////////////////////////

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        unique: true
    },
    products: []

});

//////////////////////////////////////////////////////////////////////////////

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;