//core module
const path = require('path')

//external module
const express = require('express');
const userRouter = express.Router();

//local module 
const { registeredHome } = require('./host_router');
/* yha se utils ko access krne ke lia 
hame double .. krna padega cuz vo bahar hai
router ke*/


// respond only on GET /
userRouter.get("/", (req, res) => {
  console.log(registeredHome);
  
  res.render('home',{registeredHome: registeredHome, pageTitle: 'airbnb Home'});
});

module.exports = userRouter;
