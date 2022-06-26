import React from "react";
import {Link} from 'react-router-dom';

const OptionPage = () => {
  return (
    <div>
      <h2> Health Survey Preview</h2>
      <ul className="App-header">
        <li>
          <Link to="/signInUser">User</Link>
        </li>
        <li>
          <Link to="/signInAdmin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default OptionPage;
