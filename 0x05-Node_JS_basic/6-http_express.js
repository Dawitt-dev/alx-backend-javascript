// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is listening on port 1245');
});

// Export the app variable
module.exports = app;
