
//external module
const express = require('express')

const app = express(); 
/* express is a type of function, this creates an express appliction */ 

app.use("/",(req,res,next) => {
  console.log("came in first middleware", req.url, req.method);
  res.send("<p>came in first middleware</p>")
  next();
})

app.use("/",(req,res,next) => {
  console.log("came in another middleware", req.url, req.method);
  res.send("<p>came in another middleware</p>");
})

app.use('/submit-details',(req,res,next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<p>welcome to complete coding nodejs series</p>")
})

//local module
const requestHandler = require('./user')

/* hamara jo express se app banke aya hai vo bi request
and response hi leta hai to ham app use kr skte hai*/

const PORT = 3005;
app.listen(PORT,() => {
  console.log(`server running on http://localhost:${PORT}`);
})



/* 
step- 1 --> we created an express app

step-2 --> now we will add middleware in our app
          (app.use krke middleware add kr skte hai)
          jisko pehle likhenge vo hamara pehle 
          middleware hai.

step-3 --> now we will create server using express.
            this can be done just by using (app.listen)
          
step-4 --> now we will handle routes.
            middleware define krte time ham app.use 
            ke andar path bi define kr skte hai ki mtlb
            ek particular path ki hi handling ho usse
            jada na ho.

            yha pe send krne ka mtlb hai end, aur  ye 
            aise pta chla chuz upper hamne 1st 
            middleware main response bheja hai aur vhi
            usi home page pe 2nd middleware ke through
            bi response bhejne ka try kra hai, to ye 
            rha hai ki ek bar apne response bhej diya 
            uske baad 2nd main bi kyu bhej rhe ho, 
            thats why here send means end.
            
*/