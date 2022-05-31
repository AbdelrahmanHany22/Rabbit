const express = require("express");
/////////////////////////////////////////////////////////////////////////////////////////////


const cartControllers = require('../controllers/cartController');
const authController = require('../controllers/authController');
/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(authController.protect, authController.restrictTo('admin'), cartControllers.getAllCarts);

router.route('/:userid') // when user without account creates new cart user is assigned
    .post(authController.protect, authController.restrictTo('user'), cartControllers.createCart)
    .delete(authController.protect, authController.restrictTo('user'), cartControllers.deleteCart)
    .get(authController.protect, authController.restrictTo('user'), cartControllers.getCart);


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
