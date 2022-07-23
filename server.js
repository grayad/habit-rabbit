// import modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// use PORT if it has been set, or default to 3001
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// make asset files readily available, aka static resources
app.use(express.static('./public'));

// html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});
app.get('/myhabits', (req, res) => {
    res.sendFile(path.join(__dirname, './public/myhabits.html'))
});
app.get('/create-habit', (req, res) => {
    res.sendFile(path.join(__dirname, './public/createhabits.html'))
});
// wildcard route for any requests that do not exist
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});