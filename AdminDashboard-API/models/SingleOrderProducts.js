const mongoose = require('mongoose');

//////////////////////////////////////////////////////

const SOPSchema = mongoose.Schema({
    orders: {
        products:[]
    },

    timestamp: {
        type: Date,
        default: Date.now()
    }
});

//////////////////////////////////////////////////////

const SingleOrderProducts = mongoose.model('SingleOrderProducts', SOPSchema);

module.exports = SingleOrderProducts;
