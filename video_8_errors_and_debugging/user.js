const http = require('http');
const fs = require('fs');

const requestHandler = (request, res) => {
  console.log(request.url, request.method);

  // Serve form
  if (request.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"><br>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body></html>');
    return res.end();
  }

  // Handle form submission
  if (request.url.toLowerCase() === '/submit-details' && request.method === 'POST') {
    const body = [];

    request.on('data', chunk => {
      console.log(chunk); // Buffer chunks
      body.push(chunk);
    });

    request.on('end', () => {
      // Combine buffers
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody) // ye hamare parameters ko alag alag keyvalue pairs main convert kr dega 
      // const bodyObject = {}
      // for (const [key,values] of params.entries()){
      //   bodyObject[key] = values
      // }
      
      const bodyObject = Object.fromEntries(params)//ye tarika chota aur easy dono pad jata hai
      console.log(bodyObject); // { username: 'vedantsingh_5', gender: 'male' }

      // Save to file
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));

      // Redirect back to /
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return; // exit handler until 'end'
  }

  // Fallback response
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body></html>');
  res.end();
}

/* ab ham is requestHandler ko kr skte hai import 
kyuki sara main kaam yha hora hai server hamara 
app.js main create hora hai*/

module.exports = requestHandler;

