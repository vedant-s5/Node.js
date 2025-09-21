

const sumRequestHandler = (req,res) => {
  console.log("1. In sum request handler",req.url);
  const body = []
  let result;
  req.on('data',chunk => {
    body.push(chunk)
    console.log("2. chunk came");
    /*thids is a func, hamne isse bola hai ki jab
    apke pass data ajaye tab execute ho jana, func hai ekdam se thodina execute ho jayega bina data ke*/
  });
  req.on('end', () => {
    console.log("3. end event came");
    
  const bodyStr = Buffer.concat(body).toString();
  console.log(bodyStr);

  const params = new URLSearchParams(bodyStr);
  const bodyObj = Object.fromEntries(params);
  console.log(bodyObj);

  result = Number(bodyObj.first) + Number (bodyObj.second)
  console.log(result);
});
console.log("4. sending the response");

res.setHeader('Content-type','text/html');
  res.write(`
    <html>
      <head><title>Practise Set</title></head>
      <body>
        <h1>your sun is: ${result}</h1>
      </body>
    <html>
    `);
    return res.end()
  

}

exports.sumRequestHandler = sumRequestHandler

/* yha pe abi upper async work ho rha hai islia hamre output main undefined aya, iska main reason hai ki jaise hi 1 execute hua 2nd pe gye ab 2nd krra hai async work vo jayea db ke pass data lene phri data ayega tab
3rd wale pe jayega aur 3rd wala bi usse process tabi krega jab 2nd hoga uske baad 4th pe gya aur 4th ekdam
se execute hogya cuz vo hame direct sequence main likha 
uske andar as such koi data grab nhi kra rhe hai islia 
jo result hai vo abi aya nhi hai to vo execute ho jayega 
but it will give undefined, aur yha pe jo kaam hai vo 
kisi aur kaam ke khtm hone per dependent hai*/

/* islia hamne, apne original practice set mian ye response statement req.on('end') ke 
sath likha tha jis se jab data aa jaye aur end ho jaye uske baad response print krna*/

