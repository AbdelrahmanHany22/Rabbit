const generalControllers = require("./generalControllers");
const GuestUser = require("../models/guestUserMode");
//////////////////////////////////////////////////////////////////////////


exports.getAllGuestUsers = generalControllers.getAll(GuestUser);
exports.getGuestUser = generalControllers.getOne(GuestUser);
exports.updateGuestUser = generalControllers.updateOne(GuestUser);
exports.deleteGuestUser = generalControllers.deleteOne(GuestUser);


//////////////////////////////////////////////////////////////////////////
