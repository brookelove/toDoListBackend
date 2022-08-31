// i need a get all users and get a single user to compare, create a new user

const express = require("express");
const router = express.Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// finding all users
router.get("/", (req, res) => {
  User.findAll({})
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured" }, err);
    });
});

// find one user
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id, {})
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured", err });
    });
});

// create a new user
// might change this to be login
router.post("/signup", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      // then enters a new session using that users new email and created Id
      req.session.user = {
        id: newUser.id,
        email: newUser.email,
        // password: newUser.password
      };
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error has occured", err });
    });
});

// how to match the email and password to a user to login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((foundUser) => {
    // if there is no user then we need to inform the person
    if (!foundUser) {
      return res.status(400).json({ msg: "Email/password was entered wrong" });
    }
    // if the password is the encrypted and the same as a database password then we want to login
    if(bcrypt.compareSync(req.body.password, foundUser.password){
        req.session.User = {
            id:foundUser.id,
            email:foundUser.email
        }
        return res.json(foundUser);
    } else {
        // needs to be the exact same as the email response as to not let anyone know that there is a difference
        return res.status(400).json({ msg: "Email/password was entered wrong" });
    }
    }).catch (err => {
        console.log(err);
        res.status(500).json({ msg: "An error has occured", err });
    });
  });

//   update a users email or pasword 
router.put(":/id", (req,res) => {
    User.update(req.body, {
        where: {
            id:req.params.id
        }
    }).then(updateUser => {
        res.json(updateUser)
    }).catch (err => {
        console.log(err);
        res.status(500).json({ msg: "An error has occured", err });
    });
});

// delete a user 
router.delete(":/id", (req,res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(delUser => {
        res.json(delUser);
    }).catch (err => {
        console.log(err);
        res.status(500).json({ msg: "An error has occured", err });
    });
});

// logout of user 
router.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;