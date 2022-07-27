// Import Modules
const express = require("express");
const sequelize = require("./config/connection");
const fs = require("fs");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUnInitialized: true,
  store: new SequelizeStore({db: sequelize})
}
app.use(session(sess));

// Import Routes
// const htmlRoutes = require('./routes/html-routes');
const routes = require("./routes");

// use PORT if it has been set, or default to 3001
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();
// instantiate express handlebars to use for templating
const hbs = exphbs.create();
// pass handlebars engine into express app
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// make asset files readily available, aka static resources
app.use(express.static(path.join(__dirname, "public")));
// Use Routes
// app.use('/', htmlRoutes);
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
