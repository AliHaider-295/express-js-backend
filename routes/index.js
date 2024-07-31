var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("I am Mern stack trainee at knowladge streams lahore");
});

module.exports = router;
