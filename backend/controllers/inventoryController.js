const generalController = require('./generalControllers');
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const csv = require('csvtojson');
const Products = require('../models/productModel');

/////////////////////////////////////////////////////////////////////////////////////////////


exports.updateInventory = catchAsync(async (req, res, next) => {

    if (!req.files) {
        return next(new AppError('Please upload a csv file containing the inventory list.', 401));
    }

    const file = req.files;


    if (file.inventory.mimetype.split('/')[1] !== 'csv') {
        return next(new AppError('Please upload a csv file containing the inventory list.', 401));
    }


    const csvData = file.inventory.data.toString('utf8');
    csv().fromString(csvData).then(jsonObj => {

        const updatedInventory = jsonObj.map(async (product) => {
            const currentProduct = await Products.findOne({name: product.name});

            if (currentProduct) {
                const newQuantity = Number(currentProduct.quantity) + Number(product.quantity);
                currentProduct.quantity = newQuantity;

                if (currentProduct.description !== product.description) {
                    currentProduct.description = product.description;
                }
                if (currentProduct.price !== product.price) {
                    currentProduct.price = product.price;
                }
                if (currentProduct.picture !== product.picture) {
                    currentProduct.picture = product.picture;
                }


                currentProduct.save();

            } else {
                await Products.create(product);
            }

        });


        res.status(200).json({
            status: 'success',
            message: 'Inventory successfully updated.'
        });

    });


});


// TODO:
// exports.deleteProduct = generalController.deleteOne(Product);

/////////////////////////////////////////////////////////////////////////////////////////////

