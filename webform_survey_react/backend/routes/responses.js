const express = require("express");
const router = express.Router();
const TextQuestion = require("../models/TextQuestion");

router.post("/", (req, res) => {
  console.log(req.body);

  const text_ques = TextQuestion(req.body);
  text_ques.save().then((res) => console.log("stored successfully"));
  res.send(req.body);
});

router.get("/", (req, res) => {
  TextQuestion.find({}, (err, text_ques) => {
    if (err) {
      res.json(err);
    } else {
        res.json(text_ques);

    }
  });
});

module.exports = router;
