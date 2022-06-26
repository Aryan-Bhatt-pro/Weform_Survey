import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
import QuestionList from "../Questions/QuestionList";
import ResponseList from "../Responses/ResponseList";
import "./AdminForm.css";
import { useState } from "react";
// import Question from "../Questions/Question";
const AdminForm = () => {
  const [question_selected, setQuestion] = useState(true);

  const set_ques_true = () => {
    setQuestion(true);
  };

  const set_ques_false = () => {
    setQuestion(false);
  };

  var question_list = [
    {
      question: "This is a test question 1",
      type: "text",
    },
    {
      question: "This is a test question 2",
      type: "text",
    },
    {
        question: "This is a test question 3",
        type: "mcq",
        options:["hi", "how", "are"]
    }
  ];

  return (
    <div className="admin-form">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4" style={{ fontWeight: 350 }}>
            Form Title
          </h1>
          <p class="lead">
            Form Description. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>

      <div className="ques-resp">
        <div onClick={set_ques_true} className="questions">
          Questions
        </div>
        <div onClick={set_ques_false}>Responses</div>
      </div>

      {/* question list */}
      {question_selected === true && (
        <QuestionList questionList={question_list} />
      )}
      {question_selected === false && <ResponseList />}
    </div>
  );
};

export default AdminForm;
