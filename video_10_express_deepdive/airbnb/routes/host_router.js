const path = require('path')

const express = require('express')
const hostRouter = express.Router();

const rootdir = require('../utils/path_util')


hostRouter.get("/add-home",(req,res,next) => {
  res.sendFile(path.join(rootdir,"views","add-home.html"))
})

hostRouter.post("/add-home",(req,res,next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir,"views","home-added.html"))
})


module.exports = hostRouter