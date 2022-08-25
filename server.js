const express = require("express");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    //this will give you two hours
    maxAge: 2 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
// Static directory
app.use(express.static("public"));

// need to ake the app work for react
// const hbs = exphbs.create({});
// app.engine('', hbs.engine);
// app.set('view engine', 'handlebars');

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
