const express = require("express");

//////////////////////////////////////////////////////////

const AssociationsBetweenProductsControllers = require('../controllers/AssociationBetweenProductsControllers');

//////////////////////////////////////////////////////////

const router = express.Router();

router.route('/')
    .get(AssociationsBetweenProductsControllers.getAllRequests)
   
router.route('/predictions')
    .get(AssociationsBetweenProductsControllers.getPredictions)

/////////////////////////////////////////////////////////////

module.exports = router;