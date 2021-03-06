import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
import QuestionList from "../Questions/QuestionList";
import ResponseList from "../Responses/ResponseList";
import "./AdminForm.css";
import { useState } from "react";
import axios from "axios";
// import { response } from "express";
// import Question from "../Questions/Question";
const AdminForm = ({ store_ques_list }) => {
  const [question_selected, setQuestion] = useState(true);
  const [response_list, setResList] = useState([]);

  const set_ques_true = () => {
    setQuestion(true);
  };

  const set_ques_false = () => {
    
    const req = async () => {
      const response = await axios.get('http://localhost:5000/api/responses')
      return response.data;
    }
    req().then((data) => {
      console.log(data);
      setResList(data);
    })
    
    // const dataPromise = axios
    //   .get("/http://localhost:5000/api/responses")
    //   .then((response) => 
    //     response.data)

    //   dataPromise.then((data) => {response.json({message: "Response recieved", data})})
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
    // {
    //   question: "This is a test question 3",
    //   type: "mcq",
    //   options:["opt1", "opt2", "opt3"]
    // },
    {
      question: "This is s test question 4",
      type: "text",
    },
    // {
    //   question: "This is a test question 5",
    //   type: "mcq",
    //   options:["op1", "op2", "opt3"]
    // },
  ];

  const store_ques_list_this = () => {
    alert("Your form saved successfully!");
    store_ques_list(question_list);
  };

  // store_ques_list(question_list);

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
      <div className="accordion-bodyRegExps"></div>
      {question_selected === true && (
        <div>
          <QuestionList questionList={question_list} />
          <button
            className="btn btn-primary abstract"
            onClick={store_ques_list_this}
            style={{ marginLeft: 144 }}
          >
            Finalize Form
          </button>
        </div>
      )}
      {question_selected === false && <ResponseList resList={response_list} />}
    </div>
  );
};

export default AdminForm;
