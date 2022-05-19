const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////


const router = express.Router();

router.route('/')
    .get(authController.protect, productController.getAllProducts);

router.route('/:id')
    .get(authController.protect, productController.getProduct)
    .delete(authController.protect, productController.deleteProduct);

/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;