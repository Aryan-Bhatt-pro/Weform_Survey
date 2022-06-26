import React from "react";
import { Link } from "react-router-dom";
import "./signInUser.css";
import { useNavigate } from "react-router-dom";
// import SignupUser from "./signupUser";

const SignInUser = () => {
  const navigate = useNavigate();

  const naviToUserForm = () => {
    navigate("/userform");
  };

  return (
    <div className="user-sign-in-page">
      <div className="heading-sign-in-user">Sign In as a Participant</div>
      <form class="user-form" action="" method="post" onSubmit={naviToUserForm}>
        <label>Enter your username: </label>
        <input type="text" name="" />

        <br />
        <br />

        <label>Enter your password: </label>
        <input type="password" name="" />
        <br />
        <br />
        {/* <button className="btn btn-primary btn-lg btn" onClick={naviToUserForm}>Sign In</button> */}
        <div className="sign-in-button">
          <button className="btn btn-primary btn-lg btn" type="submit">Sign In</button>
        <br />
        <br />
        <div className="create_acc">
          <div className="dont_acc" style={{marginLeft: 40}}>Don't Have an Account?</div>
          <div className="signup">
            <Link to="/createaccount">Sign Up</Link>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SignInUser;
