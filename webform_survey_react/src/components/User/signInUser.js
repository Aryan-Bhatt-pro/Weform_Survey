import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./signInUser.css";
// import SignupUser from "./signupUser";

function signInUser() {
  return <div>

		<div className="heading-sign-in-user">Sign In as a Participant</div>
        <form class="user-form" action="details.html" method="post">

        <label>Enter your username: </label>
        <input type="text" name=""/>

        <br/>
        <br/>

        <label>Enter your password: </label>
        <input type="password" name=""/>
        <br/>
        <br/>
        <input type="submit" name="" value="Sign In"/>
        <br/>
        <br/>
		<div className="create_acc">
			<div className="dont_acc">Don't Have an Account?</div>
			<div className="signup"><Link to='/signupUser'>Sign Up</Link></div>
		</div>
        </form>
  </div>;
}

export default signInUser;
