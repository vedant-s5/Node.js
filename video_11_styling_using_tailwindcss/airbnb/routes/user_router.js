//core module
const path = require('path')

//external module
const express = require('express');
const userRouter = express.Router();

//local module 
const rootdir = require('../utils/path_util')
/* yha se utils ko access krne ke lia 
hame double .. krna padega cuz vo bahar hai
router ke*/


// respond only on GET /
userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootdir,"views","home.html"));
});

module.exports = userRouter;
