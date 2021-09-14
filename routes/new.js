var express = require("express");
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", (req, res, next) => {
  res.render("form");
});

router.get("/test", (req, res, next) => {
  res.send("testing /new/test");
});

module.exports = router;
