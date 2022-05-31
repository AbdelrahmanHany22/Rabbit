const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const notificationController = require('../controllers/notificationController')
/////////////////////////////////////////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(reviewController.getAllReviews)
    .post(authController.restrictTo('user'), reviewController.setTourUserIds, reviewController.createNewReview);

router.route('/:id')
    .get(reviewController.getReview)
    .delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview)
    .patch(authController.restrictTo('user', 'admin'), reviewController.updateReview);


    
router.post("/postEmail", async (req, res) =>{
    const Email = req.body;
    const newEmail = new usermodels(Email);
    await newEmail.save();

    res.json(Email)
})

router.post('/sendEmail',(req,res)=> {
    const email = req.body;
})
router.get("/getEmail",(req,res)=>{
    usermodels.find({},(err,result) => {
        if(err){
            res.json(err)
        } else{
            res.json(result)
        }
    });
});

module.exports = router;