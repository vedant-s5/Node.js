const http = require('http');

/* createserver hamra callback function leta hai,
direct uske andar ham apan func define kr skte h*/

const server = http.createServer(function(request,response){
  console.log(request);
  process.exit() // stops the event loop
});

/* abi just hamne banaya hai, hamne use sunna start nhi kiya hai, just hamara server bana aur vo band hogya, hame use listen krna shuru krna padega, aur use btana padega ki continuously customer ki baat ko sunte rho*/
const PORT = 3004
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
})
/*ye hamara port number hai, mtlb is port pe jo req ayegi use listen krna hai, cuz ek server bahut sari req ko listen krta hai, to kahi ki info khi aur na chli jaye jha user ne mangi bi na ho islia port number use krte hai ham */

/* after this hamare server ne sunna start kr diya hai aur vo ab req ka wait krr hai*/

/*ab ham ise apne browser pe run krenge, aur apne 
browser pe run krne ke lia use btana padega ki ye server meri machine pe hi chlra hai aur khi ni, verna to vo DNS ke pass req leke chla jayega*/
