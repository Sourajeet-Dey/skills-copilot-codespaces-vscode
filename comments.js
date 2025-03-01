// create web server
// create a server
const express = require('express');
const app = express();
const port = 3000;

// create a server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// create a comment route
app.get('/comments', (req, res) => {
    res.send('This is the comments route');
});

// create a comment route with id
app.get('/comments/:id', (req, res) => {
    res.send(`This is the comments route with id ${req.params.id}`);
});

// listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});