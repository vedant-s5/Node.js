//core module 
const path = require('path')

//external module
const express = require('express')
const bodyParser = require('body-parser')

//local module
const userRouter = require('./routes/user_router')
const { hostRouter } = require('./routes/host_router')
const rootdir = require('./utils/path_util')


const app = express();
/* abi hamne ejs templating engine download kra hai aur use use krne ke 
lia hame apne express app ko btana padega ki ham ejs template engine
use krre hai*/
app.set('view engine','ejs')
app.set('views','views') // hamne apne folder ka name de diya hai jha pe ejs use hogi

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
}) // ye to har req main log kr dena jab koi req ayegi

// instead of app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter)

app.use("/host",hostRouter)

app.use(express.static(path.join(rootdir,'public')))

app.use((req,res) => {
  res.status(404).render('404', {pageTitle: 'page not found.'})
})

const PORT = 3005;
app.listen(PORT,() => {
  console.log(`server running on http://localhost:${PORT}`);
})