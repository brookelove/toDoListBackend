// neeed to be able to do all CRUD opperations for the board Board
const express = require("express");
const router = express.Router();
const { Board, Calender } = require("../../models");

// finding all Notes
router.get("/", (req, res) => {
  Board.findAll({})
    .then((dbBoard) => {
      res.json(dbBoard);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// find one Board
router.get("/:id", (req, res) => {
  Board.findByPk(req.params.id, {})
    .then((dbBoard) => {
      res.json(dbBoard);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured", err });
    });
});

// create a new Board
router.post("/", (req, res) => {
  // if not logged in then return the response
  if (!req.session.user) {
    return res
      .status(401)
      .json({ msg: "You will need to login to add a Board" });
  }
  Board.create({
    title: req.body.title,
    body: req.body.body,
    date_created: req.body.date_created,
  })
    .then((newBoard) => {
      res.json(newBoard);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// update a Board
router.put("/:id", (req, res) => {
  Board.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedBoard) => {
      res.json(updatedBoard);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a Blog
router.delete("/:id", (req, res) => {
  Board.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delBoard) => {
      res.json(delBoard);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
