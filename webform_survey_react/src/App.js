import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import SignInUser from './components/signInAdmin';
import SignInAdmin from './components/signInUser';
// import Home from './components/Home';
import {Button} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
  return (
    <Router><div className="App">
    <ul className="App-header">
      <li>
        <Link to="/signInUser">User</Link>
      </li>
      <li>
        <Link to="/signInAdmin">Admin</Link>
      </li>
    </ul>
    {/* <button className="btn btn-primary btn-lg"></button> */}
    <Button>This is a button</Button>
   <Routes>
         {/* <Route exact path='/' element={< Home />}></Route> */}
         <Route exact path='/signInUser' element={< SignInUser />}></Route>
         <Route exact path='/signInAdmin' element={< SignInAdmin />}></Route>
  </Routes>
  </div></Router>
  );
}

export default App;
