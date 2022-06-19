import React from 'react';

function signupUser () {
    return (
        <div>
            <div className="heading-signup-user">Create your Account</div>
        <form class="" action="second.html" method="post">
            <label>Your Name: </label>
            <input type="text" name="" value=""/>
            <br/>
            <br/>
            <label>Email ID: </label>
            <input type="email" name="" value=""/>
            <br/>
            <br/>
            <label>Create a password: </label>
            <input type="password" name="" value=""/>
            <br/>
            <br/>
            <label>Enter the password again: </label>
            <input type="password" name="" value=""/>
            <br/>
            <br/>
            <label>Enter the Institution ID: </label>
            <input type="text" name="" value=""/>
            <br/>
            <br/>
            <input type="submit" name="" value="Sign Up"/>
            <br/>
            <hr/>
            <hr/>
        </form>
        </div>
    );
}

export default signupUser;