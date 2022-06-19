import React from "react";
import "./signInAdmin.css";

function about() {
  return (
    <div>
      <div className="heading-sign-in-admin">Sig-In As admin</div>
      <form class="admin-form" action="details.html" method="post">
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

        <input type="submit" name="" value="Sign In" />
        <br />
        <br />
		
        <hr />
      </form>
    </div>
  );
}
export default about;
