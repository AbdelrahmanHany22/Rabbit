const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const guestUserController = require('./../controllers/guestUserController');
const authController = require('./../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////


const router = express.Router();


router.route('/')
    .get(guestUserController.getAllGuestUsers);

router.route('/createguest')
    .get(authController.createGuestUserAndSendToken);


router.route('/:id')
    .get(guestUserController.getGuestUser)
    .patch(guestUserController.updateGuestUser)
    .delete(guestUserController.updateGuestUser);


/////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;