// server.js
const connect = require('connect');
const url = require('url');

const app = connect();

// Middleware to handle requests
app.use((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);

  // Extract parameters from the query string
  const { method, x, y } = parsedUrl.query;

  // Convert x and y to numbers
  const numX = parseFloat(x);
  const numY = parseFloat(y);

  // Check if x and y are valid numbers
  if (isNaN(numX) || isNaN(numY)) {
    res.end('Invalid parameters. Please provide valid numbers for x and y.');
    return;
  }

  // Calculate result based on the method parameter
  let result;
  switch (method) {
    case 'add':
      result = numX + numY;
      break;
    case 'subtract':
      result = numX - numY;
      break;
    case 'multiply':
      result = numX * numY;
      break;
    case 'divide':
      result = numX / numY;
      break;
    default:
      res.end('Invalid method. Please provide a valid method: "add", "subtract", "multiply", or "divide".');
      return;
  }

  // Display the result on the page
  const output = `${numX} [${method}] ${numY} = ${result}`;
  res.end(output);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
