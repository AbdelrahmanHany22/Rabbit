const express = require('express');

const stripe = require('stripe')(process.env.Private_Api_key);
const {v4:uuidv4} = require('uuid');

const router = express.Router();

router.get('/',(req,res,next) =>{
    console.log("Get Response from researcher");
    res.json({
        message: 'IT WORKS!'
    });
});

router.post("/pay", (req,res,next) =>{
    console.log(req.body.token);
    const idempotencykey= uuidv4();

    return stripe.customers.create({
        email: "boudyhany22@gmail.com",
        source: req.body.token
    }).then(customer=>{
        stripe.charges.create({
            amount: 5000 *100,
            currency: 'egp',
            customer: customer.id,
            receipt_email: "boudyhany22@gmail.com"
        },{idempotencykey})
    }).then(result =>{
        console.log(result);
        res.status(200).json(result)
    }).catch(err =>{
        console.log(err);
    });
});

module.exports = router;