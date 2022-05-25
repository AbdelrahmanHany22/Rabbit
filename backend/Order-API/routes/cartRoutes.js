const express = require("express");
const cartControllers = require('../controllers/cartController');

/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(cartControllers.getAllCarts);

router.route('/:userid')
    .post(cartControllers.createCart)
    .delete(cartControllers.deleteCart)
    .get(cartControllers.getCart);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
