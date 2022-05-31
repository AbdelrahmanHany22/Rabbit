const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const guestUserController = require('./../controllers/guestUserController');
const authController = require('./../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////


const router = express.Router();


router.route('/')
    .get(authController.protect, authController.restrictTo('admin'), guestUserController.getAllGuestUsers);

router.route(`${process.env.DEVROUTESKEY}/createguest`)
    .get(authController.createGuestUserAndSendToken);


router.route('/:id')
    .get(guestUserController.getGuestUser)
    .patch(guestUserController.updateGuestUser)
    .delete(guestUserController.deleteGuestUser);


/////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;