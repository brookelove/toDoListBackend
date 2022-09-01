/*PSEUDOCODE 
1. 2 routes that are requires and 1 bonus 
    A. GET all the notes 
    B. POST put them into the notes HTML
    C. DELETE one specifc note*/
const router = require("express").Router();
const controller = require("../db/controller.js");

// 1. get all of the notes
router.get("/notes", (req, res) => {
  //2. put them into a new file json file is database
  //controller that houses all of the functions called
  controller
    .getNotes(req.body)
    .then((notes) => {
      // if things go well, response is what you expected
      return res.json(notes);
    })
    .catch((error) => res.status(500).json(error));
});

router.post("/notes", (req, res) => {
  // 1. get all of the notes
  //2. put them into a new file json file is database
  //controller that houses all of the functions called
  controller
    .addNotes(req.body)
    .then((notes) => {
      // if things go well, response is what you expected
      return res.json(notes);
    })
    .catch((error) => res.status(500).json(error));
});

router.delete("/notes/:id", (req, res) => {
  // 1. get all of the notes
  //2. put them into a new file json file is database
  //controller that houses all of the functions called
  controller
    .deleteNotes(req.params.id)
    .then(() => {
      // if things go well, response is what you expected
      return res.json({
        status: true,
      });
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
