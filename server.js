const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const allRoutes = require("./routes");
const path = require("path");

//parsing and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(allRoutes);

//starts the server
app.listen(PORT, () => {
  console.log("listen to the smooth sounds of port" + PORT);
});
