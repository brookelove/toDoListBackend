// neeed to be able to do all CRUD opperations for the board notes
const express = require("express");
const router = express.Router();
const { Notes } = require("../../models");

// finding all Notes
router.get("/", (req, res) => {
  Notes.findAll({})
    .then((dbNotes) => {
      res.json(dbNotes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// find one NOte
router.get("/:id", (req, res) => {
  Notes.findByPk(req.params.id, {})
    .then((dbNote) => {
      res.json(dbNote);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured", err });
    });
});

// create a new note
router.post("/", (req, res) => {
  // if not logged in then return the response
  if (!req.session.user) {
    return res
      .status(401)
      .json({ msg: "You will need to login to add a note" });
  }
  Notes.create({
    title: req.body.title,
    body: req.body.body,
    date_created: req.body.date_created,
  })
    .then((newNote) => {
      res.json(newNote);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// update a note
router.put("/:id", (req, res) => {
  Notes.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedNote) => {
      res.json(updatedNote);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a Blog
router.delete("/:id", (req, res) => {
  Notes.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delNote) => {
      res.json(delNote);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
