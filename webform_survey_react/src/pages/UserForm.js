import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
import QuestionList from "../Questions/QuestionList";
// import ResponseList from "../Responses/ResponseList";
import "./AdminForm.css";
import { useNavigate } from "react-router-dom";
// import AdminForm from "./AdminForm";
const UserForm = (props) => {

    const navigate = useNavigate();

    const submitHandler = () => {
        navigate('/submitpage')
    }

    // var question_list = null;

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
