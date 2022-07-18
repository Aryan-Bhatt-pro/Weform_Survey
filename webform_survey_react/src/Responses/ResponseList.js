import React from "react";

const ResponseList = (props) => {
  const string_json_array = JSON.stringify(props.resList);

//   const resp_list = JSON.parse(props.resList);

  return (
    <div>
      {props.resList.map((res) => (
        <div>
          <h3>Question: {res.question_text}</h3>
          <h3>Answer: {res.answer}</h3>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ResponseList;
