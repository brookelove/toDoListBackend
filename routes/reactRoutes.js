const path = require("path");
//lets you create these routes outside of the server
const router = require("express").Router();
// const controller = require('../db.controller.js');

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
