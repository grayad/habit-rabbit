// Import Modules
const express = require('express');
const sequelize = require('./config/connection');
const fs = require('fs');
const path = require('path');

// Import Routes
// const htmlRoutes = require('./routes/html-routes');
const routes = require('./routes');

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
// Use Routes
// app.use('/', htmlRoutes);
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});