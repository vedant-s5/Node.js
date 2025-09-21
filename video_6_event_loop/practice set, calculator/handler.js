const { sumRequestHandler }= require('./sum')

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-type','text/html');
      res.write(`
        <html>
          <head><title>Practise Set</title></head>
          <body>
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go To Calculator</a>
          </body>
        <html>
        `);
        return res.end()
  } 
  else if (req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-type','text/html');
      res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Practice Set</title>
        </head>
        <body>
            <h1>Here is the Calculator</h1>
            <form action="/calculate-result" method="POST">
                <input type="text" placeholder="First Num" name="first" />
                <input type="text" placeholder="Second Num" name="second" />
                <input type="submit" value="Sum" />
            </form>
        </body>
        </html>

        `);
        return res.end()
  }
  else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);
   
  }
  res.setHeader('Content-type','text/html');
      res.write(`
        <html>
          <head><title>Practise Set</title></head>
          <body>
            <h1>page does not exist.</h1>
            <a href="/">Go To home</a>
          </body>
        <html>
        `);
        return res.end()
}

exports.requestHandler = requestHandler;
