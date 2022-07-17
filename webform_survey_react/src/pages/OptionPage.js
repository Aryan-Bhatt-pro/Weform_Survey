import React from "react";
import {Link} from 'react-router-dom';
import './OptionPage.css'
const OptionPage = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: 50, fontStyle: 'italic', fontFamily: 'Snell Roundhand'}}> Health Survey Preview</h1>
      <ul className="app-header">
        <li className="link">
          <img className="img-user" src="https://business.ucr.edu/media/26/download?attachment" alt="" />
          <Link to="/signInUser" style={{marginLeft: 50}}>User</Link>
        </li>
        <li className="link">
          <img className="img-admin" src="https://i1.wp.com/growmetachem.com/wp-content/uploads/2020/09/Business-Male-Icon-Vector-User-Icon-Avatar-PNG-and-Vector-with-Transparent-Background-for-Free-Download.jpg?ssl=1" alt="" />
          <Link to="/signInAdmin" style={{marginLeft: 40}}>Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default OptionPage;
