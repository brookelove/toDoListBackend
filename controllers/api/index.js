const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const calenderRoutes = require("./calender-routes");
const boardRoutes = require("./board-routes");
const frontEndRoutes = require("./homeRoutes/frontEndRoutes");

router.use("/api/users", userRoutes);
router.use("/api/notes", noteRoutes);
router.use("/api/calender", calenderRoutes);
router.use("/api/board", boardRoutes);
router.use("/", frontEndRoutes);

router.get("/setfaveanimal/:faveanimal", (req, res) => {
  req.session.favAnimal = req.params.faveanimal;
  console.log(req.session);
  res.json(req.session);
});
router.get("/secretclub", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "ya gotta login to join the club!" });
  }
  res.json({ msg: `welcome to the club ${req.session.user.username}` });
});

module.exports = router;
