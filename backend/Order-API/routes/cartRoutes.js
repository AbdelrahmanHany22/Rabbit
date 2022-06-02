const express = require("express");
/////////////////////////////////////////////////////////////////////////////////////////////


const cartControllers = require('../controllers/cartController');
const authController = require('../controllers/authController');
/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(authController.protect, authController.protectGuest, authController.restrictTo('admin'), cartControllers.getAllCarts);

router.route('/') // when user without account creates new cart user is assigned
    .post(authController.protect, authController.protectGuest, cartControllers.createCart);

router.route('/:id') // when user without account creates new cart user is assigned
    .delete(authController.protect, authController.protectGuest, cartControllers.deleteCart)
    .get(authController.protect, authController.protectGuest, cartControllers.getCart);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
