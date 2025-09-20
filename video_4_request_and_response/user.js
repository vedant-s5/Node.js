// user input //

const http = require('http');
const fs = require('fs')

/* createserver hamra callback function leta hai,
direct uske andar ham apan func define kr skte h*/

const server = http.createServer(function(request,res){
if (request.url === '/'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Enter Your Details:</h1>');
res.write('<form action= "/submit-details" method="POST">');/*isko hame ab bta diya hai ki use ye data leke kha jana hai submit hone ke baad,aur post ka mtlb hota hai ki ham yha se data leke ja rhe hai*/ 
res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
res.write('<label for="male">Male</label>');
res.write('<input type="radio" id="male" name="gender" value="male" />');
res.write('<label for="female">Female</label>');
res.write('<input type="radio" id="female" name="gender" value="female" />');
res.write('<br><input type="submit" value="Submit">')
res.write('</form>');
res.write('</body>');
res.write('</html>');
return res.end(); 
}
else if (request.url.toLowerCase() === "/submit-details" &&
request.method == "POST"){
  /*agar koi sirf submit details pe click krega to vhi chor dena hai, sath main info ayegi tabi age leke jana hai /submit-details pe*/
  fs.writeFileSync('user.txt','prashant jain')
  res.statusCode = 302; /* 302 means redirection, defaultly 
  ye 200 man leta hai but apni taraf se bi set kr skte hai*/
  res.setHeader('location','/')
}
  res.setHeader('content-type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<body><h1>Like / Share / subscribe</h1></body>')
  res.write('</html>')
})

const PORT = 3004
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
})
/*abi ham server se hi ui bana rhe hai*/








