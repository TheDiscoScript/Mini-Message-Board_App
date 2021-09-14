var express = require("express");
var router = express.Router();
const moment = require("moment");

// let date = moment().format("YYYY-MM-DD");
// console.log(date);
//messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment().format("LLL"),
    title: "Good day!",
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment().format("LLL"),
    title: "Greetings!",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

//posting messages to index (homepage) view
//-> after getting called from form.pug         form(action="/new", method="POST")

router.post("/new", (req, res, next) => {
  const newMessage = {
    user: req.body.author,
    title: req.body.title,
    text: req.body.text,
    added: moment().format("LLL"),
  };
  console.log(newMessage);
  messages.unshift(newMessage);
  console.log(messages);
  res.redirect("/");
});

module.exports = router;
