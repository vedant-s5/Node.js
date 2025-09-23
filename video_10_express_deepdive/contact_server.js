const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req,res,next) => {
  console.log("first dummy middleware",req.url,req.method);
  next();
})

app.use((req,res,next) => {
  console.log("second dummy middleware",req.url,req.method);
  next();
})

// app.use((req,res,next) => {
//   console.log("third middleware",req.url,req.method);
//   res.send("<h1>welcome to complete coding</h1>")
// })

app.get("/",(req,res,next) => {
  console.log("handing / for GET", req.url,req.method);
res.send(`<h1>welcome to cmplete coding</h1>`)
  
})

app.get("/contact-us",(req,res,next) => {
  console.log("handing /contact-us for GET", req.url,req.method);
res.send(`<h1>please give your details</h1>
          <form action ="/contact-us" method = "POST">
            <input type="text" name="name" placeholder="enter your name"/>
            <input type="email" name="email" placeholder="enter your email" />
            <input type="submit" />
            </form>
         `)
  
})

app.use(bodyParser.urlencoded()); // bas body parsing ke lia itta hi likhna padta hai

app.post("/contact-us", (req,res,next) => {
  console.log("handling /contact-us for POST", req.url,req.method, req.body);
  res.send(`<h1>we will contact you shortly`)
})


const PORT = 3005;
app.listen(PORT,() => {
  console.log(`server running on http://localhost:${PORT}`);
})