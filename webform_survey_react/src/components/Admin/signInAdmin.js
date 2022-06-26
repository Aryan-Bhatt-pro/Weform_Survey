import React from "react";
import "./signInAdmin.css";
import {useNavigate} from 'react-router-dom';

function SignInAdmin() {

  const navigate =  useNavigate();

  const naviToAdminForm = () => {
    navigate('/adminform');
  }


  return (
    <div className="admin-form-page"  >
      <div className="heading-sign-in-admin">Sign-In As admin</div>
      <form class="admin-form" action="" method="post" onSubmit={naviToAdminForm} >
        <label>Enter your username: </label>
        <input type="text" name="" />

        <br />
        <br />

        <label>Enter your password: </label>
        <input type="password" name="" />
        <br />
        <br />

        <label>Enter your Institution ID: </label>
        <input type="text" name="" />
        <br />
        <br />

        <label>Enter your Institution password: </label>
        <input type="password" name="" />
        <br />
        <br />
        <div>
        <button type="submit"  className="btn btn-primary btn-lg" name="">Sign In</button>

        </div>
        <br />
        <br />
      </form>
    </div>
  );
}
export default SignInAdmin;
