const express = require("express");
/////////////////////////////////////////////////////////////////////////////////////////////


const cartControllers = require('../controllers/cartController');
const authController = require('../controllers/authController');
/////////////////////////////////////////////////////////////////////////////////////////////
const Cart = require('../models/cartModel');

const router = express.Router();

router.route('/')
    .get(cartControllers.getAllCarts);

router.route('/') // when user without account creates new cart user is assigned
    .post(authController.protect, authController.protectGuest, cartControllers.createCart);

router.route('/:id') // when user without account creates new cart user is assigned
    .delete(authController.protect, authController.protectGuest, cartControllers.deleteCart)
    .get(cartControllers.getCart);


router.route('/ex/ex').get(async (req, res) => {

    const data = [
        {
            "_id": "6290b8823b1155c11b07b965",
            "name": "Juhayna Pure Juice Mango & Peach 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Mango & Peach 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 133,
            "stock": "Available",
            "id": "6290b8823b1155c11b07b965"
        },
        {
            "_id": "6290b8823b1155c11b07b968",
            "name": "Juhayna Pure Juice Apple 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Apple 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 45,
            "stock": "Available",
            "id": "6290b8823b1155c11b07b968"
        },
        {
            "_id": "6290b8833b1155c11b07b96b",
            "name": "Juhayna Pure Juice Pineapple 235 ml",
            "description": "Rabbit presents Juhayna Pure Juice Pineapple 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 157,
            "stock": "Available",
            "id": "6290b8833b1155c11b07b96b"
        },
        {
            "_id": "6290b8833b1155c11b07b96e",
            "name": "Juhayna Pure Juice Orange 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Orange 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 15,
            "stock": "Available",
            "id": "6290b8833b1155c11b07b96e"
        },
        {
            "_id": "6290b8833b1155c11b07b971",
            "name": "Juhayna Pure Juice Cocktail 235 ml",
            "description": "Rabbit presents Juhayna Pure Juice Cocktail 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 15,
            "stock": "Available",
            "id": "6290b8833b1155c11b07b971"
        },
        {
            "_id": "6290b8833b1155c11b07b974",
            "name": "Juhayna Pure Juice Orange & Carrot 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Orange & Carrot 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 39,
            "stock": "Available",
            "id": "6290b8833b1155c11b07b974"
        },
        {
            "_id": "6290b8843b1155c11b07b977",
            "name": "Juhayna Pure Juice Orange & Carrot 235 ml",
            "description": "Rabbit presents Juhayna Pure Juice Orange & Carrot 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 141,
            "stock": "Available",
            "id": "6290b8843b1155c11b07b977"
        },
        {
            "_id": "6290b8843b1155c11b07b97a",
            "name": "Juhayna Pure Juice Apple 235 ml",
            "description": "Rabbit presents Juhayna Pure Juice Apple 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 50,
            "stock": "Available",
            "id": "6290b8843b1155c11b07b97a"
        },
        {
            "_id": "6290b8843b1155c11b07b97d",
            "name": "Juhayna Pure Juice Guava 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Guava 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 165,
            "stock": "Available",
            "id": "6290b8843b1155c11b07b97d"
        },
        {
            "_id": "6290b8853b1155c11b07b980",
            "name": "Juhayna Pure Juice Guava 235 ml",
            "description": "Rabbit presents Juhayna Pure Juice Guava 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 131,
            "stock": "Available",
            "id": "6290b8853b1155c11b07b980"
        },
        {
            "_id": "6290b8853b1155c11b07b983",
            "name": "Juhayna Pure Juice Cocktail 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Cocktail 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 147,
            "stock": "Available",
            "id": "6290b8853b1155c11b07b983"
        },
        {
            "_id": "6290b8853b1155c11b07b986",
            "name": "Juhayna Pure Juice Orange 235 ml",
            "description": "Rabbit presents Juhayna Pure Juice Orange 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 13,
            "stock": "Available",
            "id": "6290b8853b1155c11b07b986"
        },
        {
            "_id": "6290b8853b1155c11b07b989",
            "name": "Juhayna Pure Red Grapes 235 ml",
            "description": "Rabbit presents Juhayna Pure Red Grapes 235 ml",
            "price": 6.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 41,
            "stock": "Available",
            "id": "6290b8853b1155c11b07b989"
        },
        {
            "_id": "6290b8863b1155c11b07b98c",
            "name": "Juhayna Pure Pomegranate 1 L",
            "description": "Rabbit presents Juhayna Pure Pomegranate 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 198,
            "stock": "Available",
            "id": "6290b8863b1155c11b07b98c"
        },
        {
            "_id": "6290b8863b1155c11b07b98f",
            "name": "Juhayna Pure Juice Tomato 1 L",
            "description": "Rabbit presents Juhayna Pure Juice Tomato 1 L",
            "price": 23.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 182,
            "stock": "Available",
            "id": "6290b8863b1155c11b07b98f"
        },
        {
            "_id": "6290b8863b1155c11b07b992",
            "name": "Lamar Mango Juice 100% - 1 L",
            "description": "Rabbit presents Lamar Mango Juice 100% - 1 L",
            "price": 23.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 81,
            "stock": "Available",
            "id": "6290b8863b1155c11b07b992"
        },
        {
            "_id": "6290b8873b1155c11b07b995",
            "name": "Lamar Cranberry Blend  Juice 100% 1 L",
            "description": "Rabbit presents Lamar Cranberry Blend  Juice 100% 1 L",
            "price": 23.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 91,
            "stock": "Available",
            "id": "6290b8873b1155c11b07b995"
        },
        {
            "_id": "6290b8873b1155c11b07b998",
            "name": "Lamar Cranberry 100% - 200 ml",
            "description": "Rabbit presents Lamar Cranberry 100% - 200 ml",
            "price": 6.5,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 81,
            "stock": "Available",
            "id": "6290b8873b1155c11b07b998"
        },
        {
            "_id": "6290b8883b1155c11b07b99b",
            "name": "Lamar Apple Juice 100% 1 L",
            "description": "Rabbit presents Lamar Apple Juice 100% 1 L",
            "price": 23.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 71,
            "stock": "Available",
            "id": "6290b8883b1155c11b07b99b"
        },
        {
            "_id": "6290b8883b1155c11b07b99e",
            "name": "Lamar Orange Juice 100% 1 L",
            "description": "Rabbit presents Lamar Orange Juice 100% 1 L",
            "price": 23.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 75,
            "stock": "Available",
            "id": "6290b8883b1155c11b07b99e"
        },
        {
            "_id": "6290b8893b1155c11b07b9a2",
            "name": "Lamar Pomegranate Juice 100% 1 L",
            "description": "Rabbit presents Lamar Pomegranate Juice 100% 1 L",
            "price": 23.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 18,
            "stock": "Available",
            "id": "6290b8893b1155c11b07b9a2"
        },
        {
            "_id": "6290b8893b1155c11b07b9a5",
            "name": "Lamar Apple Juice 100% 200 ml",
            "description": "Rabbit presents Lamar Apple Juice 100% 200 ml",
            "price": 6.5,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 11,
            "stock": "Available",
            "id": "6290b8893b1155c11b07b9a5"
        },
        {
            "_id": "6290b8893b1155c11b07b9a8",
            "name": "Lamar Red Grape Juice 100% 1 L",
            "description": "Rabbit presents Lamar Red Grape Juice 100% 1 L",
            "price": 23.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 113,
            "stock": "Available",
            "id": "6290b8893b1155c11b07b9a8"
        },
        {
            "_id": "6290b8953b1155c11b07ba0f",
            "name": "Red Bull Energy Drink 250 ml",
            "description": "Rabbit presents Red Bull Energy Drink 250 ml",
            "price": 24.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 172,
            "stock": "Available",
            "id": "6290b8953b1155c11b07ba0f"
        },
        {
            "_id": "6290b8953b1155c11b07ba15",
            "name": "Red Bull Energy Drink 250 Ml x 4 Pcs",
            "description": "Rabbit presents Red Bull Energy Drink 250 Ml x 4 Pcs",
            "price": 82.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 156,
            "stock": "Available",
            "id": "6290b8953b1155c11b07ba15"
        },
        {
            "_id": "6290b8953b1155c11b07ba1b",
            "name": "Red Bull Energy Drink  Cactus 250 ml",
            "description": "Rabbit presents Red Bull Energy Drink  Cactus 250 ml",
            "price": 24.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 68,
            "stock": "Available",
            "id": "6290b8953b1155c11b07ba1b"
        },
        {
            "_id": "6290b8963b1155c11b07ba21",
            "name": "Red Bull White Edition 250 ml",
            "description": "Rabbit presents Red Bull White Edition 250 ml",
            "price": 24.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 163,
            "stock": "Available",
            "id": "6290b8963b1155c11b07ba21"
        },
        {
            "_id": "6290b8963b1155c11b07ba27",
            "name": "Red Bull Sugar Free",
            "description": "Rabbit presents Red Bull Sugar Free",
            "price": 24.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 194,
            "stock": "Available",
            "id": "6290b8963b1155c11b07ba27"
        },
        {
            "_id": "6290b8963b1155c11b07ba2d",
            "name": "Red Bull Red Edition 250 ml",
            "description": "Rabbit presents Red Bull Red Edition 250 ml",
            "price": 24.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 199,
            "stock": "Available",
            "id": "6290b8963b1155c11b07ba2d"
        },
        {
            "_id": "6290b8973b1155c11b07ba36",
            "name": "Red Bull Energy Drink Sugar Free 250 Ml x 4 Pcs",
            "description": "Rabbit presents Red Bull Energy Drink Sugar Free 250 Ml x 4 Pcs",
            "price": 90,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 197,
            "stock": "Available",
            "id": "6290b8973b1155c11b07ba36"
        },
        {
            "_id": "6290b8973b1155c11b07ba3c",
            "name": "Red Bull 12 Pcs",
            "description": "Rabbit presents Red Bull 12 Pcs",
            "price": 284.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 87,
            "stock": "Available",
            "id": "6290b8973b1155c11b07ba3c"
        },
        {
            "_id": "6290b8983b1155c11b07ba43",
            "name": "Sting Energy Drink 275M",
            "description": "Rabbit presents Sting Energy Drink 275M",
            "price": 4.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 34,
            "stock": "Available",
            "id": "6290b8983b1155c11b07ba43"
        },
        {
            "_id": "6290b8983b1155c11b07ba4a",
            "name": "Paradise Chocolate Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Chocolate Ice Cream - 850ml",
            "price": 67.5,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 176,
            "stock": "Available",
            "id": "6290b8983b1155c11b07ba4a"
        },
        {
            "_id": "6290b8983b1155c11b07ba51",
            "name": "Paradise Brownies Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Brownies Ice Cream - 850ml",
            "price": 72,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 78,
            "stock": "Available",
            "id": "6290b8983b1155c11b07ba51"
        },
        {
            "_id": "6290b8983b1155c11b07ba58",
            "name": "Paradise Vanilla Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Vanilla Ice Cream - 850ml",
            "price": 58.5,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 152,
            "stock": "Available",
            "id": "6290b8983b1155c11b07ba58"
        },
        {
            "_id": "6290b8993b1155c11b07ba5f",
            "name": "Paradise Mistika Pistachio Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Mistika Pistachio Ice Cream - 850ml",
            "price": 72,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 107,
            "stock": "Available",
            "id": "6290b8993b1155c11b07ba5f"
        },
        {
            "_id": "6290b8993b1155c11b07ba66",
            "name": "Paradise Vanila Caramel Ice Cream Tub - 850ml",
            "description": "Rabbit presents Paradise Vanila Caramel Ice Cream Tub - 850ml",
            "price": 67.5,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 117,
            "stock": "Available",
            "id": "6290b8993b1155c11b07ba66"
        },
        {
            "_id": "6290b8993b1155c11b07ba6d",
            "name": "Paradise Caramelita Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Caramelita Ice Cream - 850ml",
            "price": 72,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 99,
            "stock": "Available",
            "id": "6290b8993b1155c11b07ba6d"
        },
        {
            "_id": "6290b89a3b1155c11b07ba74",
            "name": "Paradise Mango Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Mango Ice Cream - 850ml",
            "price": 67.5,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 125,
            "stock": "Available",
            "id": "6290b89a3b1155c11b07ba74"
        },
        {
            "_id": "6290b89a3b1155c11b07ba7f",
            "name": "Carnavalita Vanilla Strawberry Ice Cream  - 850ml",
            "description": "Rabbit presents Carnavalita Vanilla Strawberry Ice Cream  - 850ml",
            "price": 30,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 109,
            "stock": "Available",
            "id": "6290b89a3b1155c11b07ba7f"
        },
        {
            "_id": "6290b89b3b1155c11b07ba86",
            "name": "Paradise Strawberry Ice Cream - 850ml",
            "description": "Rabbit presents Paradise Strawberry Ice Cream - 850ml",
            "price": 67.5,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 113,
            "stock": "Available",
            "id": "6290b89b3b1155c11b07ba86"
        },
        {
            "_id": "6290b89b3b1155c11b07ba8d",
            "name": "Cadbury Caramel ice cream with Chocolate Tub - 500ml",
            "description": "Rabbit presents Cadbury Caramel ice cream with Chocolate Tub - 500ml",
            "price": 75,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 150,
            "stock": "Available",
            "id": "6290b89b3b1155c11b07ba8d"
        },
        {
            "_id": "6290b89b3b1155c11b07ba94",
            "name": "Cadbury Vanilla ice cream with Chocolate Tub - 500ml",
            "description": "Rabbit presents Cadbury Vanilla ice cream with Chocolate Tub - 500ml",
            "price": 75,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 115,
            "stock": "Available",
            "id": "6290b89b3b1155c11b07ba94"
        },
        {
            "_id": "6290b89c3b1155c11b07ba9b",
            "name": "Oreo Ice cream Tub - 500ml",
            "description": "Rabbit presents Oreo Ice cream Tub - 500ml",
            "price": 75,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 19,
            "stock": "Available",
            "id": "6290b89c3b1155c11b07ba9b"
        },
        {
            "_id": "6290b89c3b1155c11b07baa2",
            "name": "Paradise Basbousa With Eshta Flavored Ice Cream 800 Ml",
            "description": "Rabbit presents Paradise Basbousa With Eshta Flavored Ice Cream 800 Ml",
            "price": 85,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 134,
            "stock": "Available",
            "id": "6290b89c3b1155c11b07baa2"
        },
        {
            "_id": "6290b89c3b1155c11b07baa9",
            "name": "Siviero Maria  Hazelnut & Chocolate Ice Cream",
            "description": "Rabbit presents Siviero Maria  Hazelnut & Chocolate Ice Cream",
            "price": 139.95,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 197,
            "stock": "Available",
            "id": "6290b89c3b1155c11b07baa9"
        },
        {
            "_id": "6290b89c3b1155c11b07bab0",
            "name": "Siviero Maria Ice Cream Pistachio 1 L",
            "description": "Rabbit presents Siviero Maria Ice Cream Pistachio 1 L",
            "price": 139.95,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 93,
            "stock": "Available",
            "id": "6290b89c3b1155c11b07bab0"
        },
        {
            "_id": "6290b89d3b1155c11b07bab7",
            "name": "Siviero Maria Vanilla Ice Cream 1 L",
            "description": "Rabbit presents Siviero Maria Vanilla Ice Cream 1 L",
            "price": 139.95,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 172,
            "stock": "Available",
            "id": "6290b89d3b1155c11b07bab7"
        },
        {
            "_id": "6290b89d3b1155c11b07babf",
            "name": "Siviero Maria Ice Cream Taramsio 1 L",
            "description": "Rabbit presents Siviero Maria Ice Cream Taramsio 1 L",
            "price": 139.95,
            "category": "kitchen Consumables",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 73,
            "stock": "Available",
            "id": "6290b89d3b1155c11b07babf"
        },
        {
            "_id": "6290b8a03b1155c11b07bad8",
            "name": "Dina Farms Mango Juice Fresh 250 ml",
            "description": "Rabbit presents Dina Farms Mango Juice Fresh 250 ml",
            "price": 12.5,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 106,
            "stock": "Available",
            "id": "6290b8a03b1155c11b07bad8"
        },
        {
            "_id": "6290b8a03b1155c11b07badf",
            "name": "Dina Farms Fresh Mango Juice 850 ml",
            "description": "Rabbit presents Dina Farms Fresh Mango Juice 850 ml",
            "price": 35.5,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 44,
            "stock": "Available",
            "id": "6290b8a03b1155c11b07badf"
        },
        {
            "_id": "6290b8a03b1155c11b07bae6",
            "name": "Dina Farms Fresh Strawberry Juice 850 ml",
            "description": "Rabbit presents Dina Farms Fresh Strawberry Juice 850 ml",
            "price": 33,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 173,
            "stock": "Available",
            "id": "6290b8a03b1155c11b07bae6"
        },
        {
            "_id": "6290b8b03b1155c11b07bc48",
            "name": "The Leaf  Green Apple Ice Tea 250 ml",
            "description": "Rabbit presents The Leaf  Green Apple Ice Tea 250 ml",
            "price": 10.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 189,
            "stock": "Available",
            "id": "6290b8b03b1155c11b07bc48"
        },
        {
            "_id": "6290b8b03b1155c11b07bc4f",
            "name": "The Leaf  Blueberrry Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf  Blueberrry Ice Tea 370 ml",
            "price": 16.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 50,
            "stock": "Available",
            "id": "6290b8b03b1155c11b07bc4f"
        },
        {
            "_id": "6290b8b13b1155c11b07bc56",
            "name": "The Leaf  Pineapple Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf  Pineapple Ice Tea 370 ml",
            "price": 16.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 73,
            "stock": "Available",
            "id": "6290b8b13b1155c11b07bc56"
        },
        {
            "_id": "6290b8b13b1155c11b07bc5d",
            "name": "The Leaf Lemon Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf Lemon Ice Tea 370 ml",
            "price": 16.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 52,
            "stock": "Available",
            "id": "6290b8b13b1155c11b07bc5d"
        },
        {
            "_id": "6290b8b13b1155c11b07bc64",
            "name": "The Leaf Moroccan Mint Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf Moroccan Mint Ice Tea 370 ml",
            "price": 21.96,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 110,
            "stock": "Available",
            "id": "6290b8b13b1155c11b07bc64"
        },
        {
            "_id": "6290b8b13b1155c11b07bc6b",
            "name": "The Leaf Green Apple Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf Green Apple Ice Tea 370 ml",
            "price": 16.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 41,
            "stock": "Available",
            "id": "6290b8b13b1155c11b07bc6b"
        },
        {
            "_id": "6290b8b23b1155c11b07bc72",
            "name": "The Leaf Pomegranate Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf Pomegranate Ice Tea 370 ml",
            "price": 16.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 54,
            "stock": "Available",
            "id": "6290b8b23b1155c11b07bc72"
        },
        {
            "_id": "6290b8b23b1155c11b07bc79",
            "name": "The Leaf Pomegranate Ice Tea 250 ml",
            "description": "Rabbit presents The Leaf Pomegranate Ice Tea 250 ml",
            "price": 10.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 46,
            "stock": "Available",
            "id": "6290b8b23b1155c11b07bc79"
        },
        {
            "_id": "6290b8b23b1155c11b07bc80",
            "name": "The Leaf Cinammon Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf Cinammon Ice Tea 370 ml",
            "price": 21.97,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 69,
            "stock": "Available",
            "id": "6290b8b23b1155c11b07bc80"
        },
        {
            "_id": "6290b8b33b1155c11b07bc87",
            "name": "The Leaf English Breakfast Ice Tea 370 ml",
            "description": "Rabbit presents The Leaf English Breakfast Ice Tea 370 ml",
            "price": 21.95,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 102,
            "stock": "Available",
            "id": "6290b8b33b1155c11b07bc87"
        },
        {
            "_id": "6290b8b33b1155c11b07bc8e",
            "name": "Almarai Juice Apple 235ml",
            "description": "Rabbit presents Almarai Juice Apple 235ml",
            "price": 7,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 190,
            "stock": "Available",
            "id": "6290b8b33b1155c11b07bc8e"
        },
        {
            "_id": "6290b8b33b1155c11b07bc92",
            "name": "Almarai Juice Mango 235ml",
            "description": "Rabbit presents Almarai Juice Mango 235ml",
            "price": 7,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 50,
            "stock": "Available",
            "id": "6290b8b33b1155c11b07bc92"
        },
        {
            "_id": "6290b8b43b1155c11b07bc95",
            "name": "Almarai Juice Guava 235ml",
            "description": "Rabbit presents Almarai Juice Guava 235ml",
            "price": 7,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 71,
            "stock": "Available",
            "id": "6290b8b43b1155c11b07bc95"
        },
        {
            "_id": "6290b8b43b1155c11b07bc98",
            "name": "Almarai Juice Orange 235ml",
            "description": "Rabbit presents Almarai Juice Orange 235ml",
            "price": 7,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 65,
            "stock": "Available",
            "id": "6290b8b43b1155c11b07bc98"
        },
        {
            "_id": "6290b8b43b1155c11b07bc9b",
            "name": "Juhayna Classic Orange Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Orange Juice 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 66,
            "stock": "Available",
            "id": "6290b8b43b1155c11b07bc9b"
        },
        {
            "_id": "6290b8b53b1155c11b07bc9e",
            "name": "Juhayna Classic Blend Mixed Berries Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Blend Mixed Berries Juice 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 192,
            "stock": "Available",
            "id": "6290b8b53b1155c11b07bc9e"
        },
        {
            "_id": "6290b8b53b1155c11b07bca1",
            "name": "Juhayna Classic Mango Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Mango Juice 1 L",
            "price": 13.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 139,
            "stock": "Available",
            "id": "6290b8b53b1155c11b07bca1"
        },
        {
            "_id": "6290b8b53b1155c11b07bca4",
            "name": "Juhayna Classic Guava Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Guava Juice 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 125,
            "stock": "Available",
            "id": "6290b8b53b1155c11b07bca4"
        },
        {
            "_id": "6290b8b53b1155c11b07bca7",
            "name": "Juhayna Classic Apple Pear Juice - 1 L",
            "description": "Rabbit presents Juhayna Classic Apple Pear Juice - 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 88,
            "stock": "Available",
            "id": "6290b8b53b1155c11b07bca7"
        },
        {
            "_id": "6290b8b63b1155c11b07bcaa",
            "name": "Juhayna Classic Blend Tangerine Mandarin Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Blend Tangerine Mandarin Juice 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 84,
            "stock": "Available",
            "id": "6290b8b63b1155c11b07bcaa"
        },
        {
            "_id": "6290b8b63b1155c11b07bcad",
            "name": "Almarai Juice Mango 1.0L Pet",
            "description": "Rabbit presents Almarai Juice Mango 1.0L Pet",
            "price": 22,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 66,
            "stock": "Available",
            "id": "6290b8b63b1155c11b07bcad"
        },
        {
            "_id": "6290b8b63b1155c11b07bcb0",
            "name": "Juhayna Classic Cocktail Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Cocktail Juice 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 176,
            "stock": "Available",
            "id": "6290b8b63b1155c11b07bcb0"
        },
        {
            "_id": "6290b8b73b1155c11b07bcb3",
            "name": "Juhayna Classic Blend Mixed Berries Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Blend Mixed Berries Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 97,
            "stock": "Available",
            "id": "6290b8b73b1155c11b07bcb3"
        },
        {
            "_id": "6290b8b73b1155c11b07bcb6",
            "name": "Almarai Juice Apple 1.0L Pet",
            "description": "Rabbit presents Almarai Juice Apple 1.0L Pet",
            "price": 20,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 26,
            "stock": "Available",
            "id": "6290b8b73b1155c11b07bcb6"
        },
        {
            "_id": "6290b8b73b1155c11b07bcb9",
            "name": "Juhayna Classic Orange Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Orange Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 117,
            "stock": "Available",
            "id": "6290b8b73b1155c11b07bcb9"
        },
        {
            "_id": "6290b8b83b1155c11b07bcbc",
            "name": "Juhayna Classic Mango Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Mango Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 10,
            "stock": "Available",
            "id": "6290b8b83b1155c11b07bcbc"
        },
        {
            "_id": "6290b8b83b1155c11b07bcbf",
            "name": "Juhayna Classic Apple Juice 1 L",
            "description": "Rabbit presents Juhayna Classic Apple Juice 1 L",
            "price": 12.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 56,
            "stock": "Available",
            "id": "6290b8b83b1155c11b07bcbf"
        },
        {
            "_id": "6290b8b83b1155c11b07bcc2",
            "name": "Almarai Juice Orange 1.0L Pet",
            "description": "Rabbit presents Almarai Juice Orange 1.0L Pet",
            "price": 20,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 26,
            "stock": "Available",
            "id": "6290b8b83b1155c11b07bcc2"
        },
        {
            "_id": "6290b8b83b1155c11b07bcc5",
            "name": "Almarai Juice Guava 1.0L Pet",
            "description": "Rabbit presents Almarai Juice Guava 1.0L Pet",
            "price": 20,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 135,
            "stock": "Available",
            "id": "6290b8b83b1155c11b07bcc5"
        },
        {
            "_id": "6290b8b93b1155c11b07bcc8",
            "name": "Juhayna Classic Guava Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Guava Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 199,
            "stock": "Available",
            "id": "6290b8b93b1155c11b07bcc8"
        },
        {
            "_id": "6290b8b93b1155c11b07bccb",
            "name": "Juhayna Classic Pineapple Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Pineapple Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 73,
            "stock": "Available",
            "id": "6290b8b93b1155c11b07bccb"
        },
        {
            "_id": "6290b8b93b1155c11b07bcce",
            "name": "Juhayna Juice Classics Apple Pear Juice 235 ml",
            "description": "Rabbit presents Juhayna Juice Classics Apple Pear Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 155,
            "stock": "Available",
            "id": "6290b8b93b1155c11b07bcce"
        },
        {
            "_id": "6290b8ba3b1155c11b07bcd1",
            "name": "Juhayna Classic Apple Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Apple Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 29,
            "stock": "Available",
            "id": "6290b8ba3b1155c11b07bcd1"
        },
        {
            "_id": "6290b8ba3b1155c11b07bcd4",
            "name": "Juhayna Classic Cocktail Juice 235 ml",
            "description": "Rabbit presents Juhayna Classic Cocktail Juice 235 ml",
            "price": 4.45,
            "category": "Beverages",
            "picture": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lqcm8z8qwhi42efm2lue",
            "quantity": 53,
            "stock": "Available",
            "id": "6290b8ba3b1155c11b07bcd4"
        }];


    for (let i = 0; i < 7000; i++) {
        // Create array of object keys, ["311", "310", ...]
        const keys = Object.keys(data);

        let x = [];

        for (let j = 0; j < 10; j++) {
            //  Generate random index based on number of keys
            const randIndex = Math.floor(Math.random() * keys.length);

// Select a key from the array of keys using the random index
            const randKey = keys[randIndex];

// Use the key to get the corresponding name from the "names" object
            const prod = data[randKey];
            x.push(prod);


        }

        await Cart.create({
            user: '62965fd1056ff82aefaacf69',
            price: 342.42,
            products: x
        });
        console.log('Created ' + i);

    }

    res.status(200).json({
        msg: 'Success'
    });


});


/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
