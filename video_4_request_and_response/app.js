const http = require('http');

/* createserver hamra callback function leta hai,
direct uske andar ham apan func define kr skte h*/

const server = http.createServer(function(request,response){
  console.log(request.url,request.method,request.headers);

  if (request.url === '/') {
    response.setHeader('content-type','text/html')
  response.write('<html>')
  response.write('<head><title>Complete Coding</title></head>')
  response.write('<body><h1>Welcome to Home</h1></body>')
  response.write('</html>')
  return response.end()
    
  }
  else if(request.url === '/products'){
    response.setHeader('content-type','text/html')
  response.write('<html>')
  response.write('<head><title>Complete Coding</title></head>')
  response.write('<body><h1>checkout our Products</h1></body>')
  response.write('</html>')
  return response.end()
  }
  else{
  response.setHeader('content-type','text/html')
  response.write('<html>')
  response.write('<head><title>Complete Coding</title></head>')
  response.write('<body><h1>Like / Share / subscribe</h1></body>')
  response.write('</html>')
  response.end()
  } /*this is called routing request*/
  /* response ke through hamne apne server se client ko html ki form main response bheja hai aur vo response hame apne page main dikh jayega*/
  
});

const PORT = 3004
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
})

/* url ki jagah usne sirf / diya hai cuz port tak jo address hai vo hamari machine ka part manta hai usse 
url ka nhi to, url ka paart us / ke baad hota hai, kuch nhi hota to by default / de deta hai*/

/* request hamne dekh lia ab ham dekhenge ki response kaise bhejna hai */

/* ab ham dekhenge routing request, mtlb ki hamare post ke baad jo / hai jha se url shuru hota hai vha agar kuch likhenge to alag alag jagah redirect hona chaiye, jaise myntra.com se vo homepage per jayega
aur myntra.com/shop/women krenge to vo alag page pe redirect kr dega*/








