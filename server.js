const express = require("express");
const fs = require("fs");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const { clear } = require("console");

const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUnInitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});