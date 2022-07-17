import React from "react";
import "./Question.css";
import { useState } from "react";


const Question = (props) => {
  // props.question = ques;
  const [text_ans, setText_ans] = useState("");
  
  if (props.question.type === "text") {
    return (
      <div className="question">
        <div className="question-text">{props.question.question}</div>
        <div className="question-box">
          <input type="text" placeholder="Enter your answer" value={text_ans} onChange={(event) => {
            setText_ans(event.target.value)
          } } />
        </div>
        {/* <p>{text_ans}</p> */}
      </div>
    );
  }

  if (props.question.type === "mcq") {
    return (
      <div className="question">
        <div className="question-text">{props.question.question}</div>
        {props.question.options.map((option) => (
          <div>
            <input type="radio" id="huey" name="hi"/>
            <label for="opt">{option}</label>
          </div>
        ))}
      </div>
    );
  }
};

export default Question;
