// Create web server application

// Import the express module
const express = require('express');

// Import the comments.js module
const comments = require('./comments');

// Create an instance of the express server
const app = express();

// Create a route for the path '/comments'
app.get('/comments', (req, res) => {
    // Set the response header to 'application/json'
    res.setHeader('Content-Type', 'application/json');
    // Set the response body to a JSON string of the comments array
    res.send(JSON.stringify(comments));
});

// Start the express server on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});