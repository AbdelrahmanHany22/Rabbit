const express = require('express');
const cors = require('cors');
require('dotenv').config({path: '../Config.env'});
const app = express();
const mongoose = require('mongoose');
//////////////////////////////////////////////////////////////////////////////


const uri = process.env.DATABASE_STRING;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


//////////////////////////////////////////////////////////////////////////////
app.use(cors());
app.use(express.json());
//////////////////////////////////////////////////////////////////////////////

app.use('/api/v1/notifications');
// we fo2 hat require el routes file we testa5demo
// ya3ni masalan momken const notificationRoutes = require('../routes/notificationRoutes');
// we hena te3mel masalan app.use('/api/v1/notifications', notificationRouter);
// fel routes file hayeb2a shaklo keda masalan:
// const express = require("express");
// const router = express.Router({
//     mergeParams: true
// });
//
// router.route('/')
//     .get(reviewController.getAllReviews)
//     .post(authController.restrictTo('user'), reviewController.setTourUserIds, reviewController.createNewReview);
//
// router.route('/:id')
//     .get(reviewController.getReview)
//     .delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview)
//     .patch(authController.restrictTo('user', 'admin'), reviewController.updateReview);
//
//
// module.exports = router;
// we howa router da el enta hata3melo require we te7oto fih el notifications route fe app.js


//////////////////////////////////////////////////////////////////////////////

module.exports = app;