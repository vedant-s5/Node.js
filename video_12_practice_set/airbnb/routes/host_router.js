const path = require('path')

const express = require('express')
const hostRouter = express.Router();

const rootdir = require('../utils/path_util')


hostRouter.get("/add-home",(req,res,next) => {
  res.render('add-home', {pageTitle: 'add home to airbnb'})
})

const registeredHome = [];

hostRouter.post("/add-home",(req,res,next) => {
  console.log("home registration successful for: ",req.body);
  registeredHome.push(req.body)
  res.render('home-added', {pageTitle: 'home added successfully.'})
})


exports.hostRouter = hostRouter
exports.registeredHome = registeredHome