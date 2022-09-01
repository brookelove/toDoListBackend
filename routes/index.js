const express = require("express");
const router = express.Router();
const path = require("path");

// Api routes housed here
const APIroutes = require("./APIroutes.js");
router.use("/api", APIroutes);

// HTML routes housed here
const HTMLroutes = require("./HTMLroutes.js");
router.use("/", HTMLroutes);

// router.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
// })
module.exports = router;
