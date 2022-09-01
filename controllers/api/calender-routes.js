// neeed to be able to do all CRUD opperations for the board Calender
const express = require("express");
const router = express.Router();
const { Calender } = require("../../models");

// finding all Calender
router.get("/", (req, res) => {
  Calender.findAll({})
    .then((dbCalenders) => {
      res.json(dbCalenders);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// find one Calender
router.get("/:id", (req, res) => {
  Calender.findByPk(req.params.id, {})
    .then((dbCalender) => {
      res.json(dbCalender);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured", err });
    });
});

// create a new Calender
router.post("/", (req, res) => {
  // if not logged in then return the response
  if (!req.session.user) {
    return res
      .status(401)
      .json({ msg: "You will need to login to add a Calender" });
  }
  Calender.create({
    title: req.body.title,
    body: req.body.body,
    date_created: req.body.date_created,
  })
    .then((newCalender) => {
      res.json(newCalender);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// update a Calender
router.put("/:id", (req, res) => {
  Calender.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCalender) => {
      res.json(updatedCalender);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a Blog
router.delete("/:id", (req, res) => {
  Calender.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delCalender) => {
      res.json(delCalender);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
