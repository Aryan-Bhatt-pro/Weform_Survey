import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import SignInAdmin from './components/Admin/signInAdmin';
import SignInUser from './components/User/signInUser';
// import Home from './components/Home';
import {Button} from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router><div className="App">
    <h2> Health Survey Preview</h2>
    <ul className="App-header">
      <li>
        <Link to="/signInUser">User</Link>
      </li>
      <li>
        <Link to="/signInAdmin">Admin</Link>
      </li>
    </ul>
    {/* <button className="btn btn-primary btn-lg"></button> */}
    {/* <Button className="btn btn-primary btn-lg">This is a button</Button> */}
   <Routes>
         {/* <Route exact path='/' element={< Home />}></Route> */}
         <Route exact path='/signInUser' element={< SignInUser />}></Route>
         <Route exact path='/signInAdmin' element={< SignInAdmin />}></Route>
  </Routes>
  </div></Router>
  );
}

export default App;
