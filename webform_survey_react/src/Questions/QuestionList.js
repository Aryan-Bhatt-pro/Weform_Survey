import React from "react";
import "./QuestionList.css";
import Question from "./Question";

const QuestionList = (props) => {
  return (
    <div className="question-list">
      {props.questionList.map((ques) => (
        <Question question={ques} />
      ))}
    </div>
  );
};

export default QuestionList;
