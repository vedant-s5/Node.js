
//external module
const express = require('express');
const userRouter = express.Router();

//local module 
const homesController = require('../controllers/Homes')


// respond only on GET /
userRouter.get("/", homesController.getHomePage)

module.exports = userRouter;
