import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
import QuestionList from "../Questions/QuestionList";
// import ResponseList from "../Responses/ResponseList";
import "./AdminForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


// import AdminForm from "./AdminForm";
const UserForm = (props) => {
    
    // const express = require('express');
    // const bodyParser = require('body-parser');
    // const app = express();
    // const mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost:27017/test');
    // app.use(bodyParser.urlencoded({ extended: true}));
    // app.use(bodyParser.json());

    const navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault();

      // const response = {
      
      // }

      axios.post('/api/responses', ).then((res) => {
        console.log("submitted successfully")
      })

        // navigate('/submitpage')
    // var question_list = null;
};
    // question_list = props.ques_list;

  return (
    <form className="admin-form" method="post" onSubmit={submitHandler}>
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
      <QuestionList questionList={props.ques_list} />

      <button type="submit" className="btn btn-primary btn-lg btn-block" style={{marginLeft: 144}}>Submit Form</button>
    </form>
  );

};

export default UserForm;
