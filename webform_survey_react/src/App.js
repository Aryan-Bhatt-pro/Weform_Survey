import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';

import SignInAdmin from './components/Admin/signInAdmin';
import SignInUser from './components/User/signInUser';
import OptionPage from './pages/OptionPage';
import CreateAcc from './pages/CreateAcc';
import UserForm from './pages/UserForm';
import AdminForm from './pages/AdminForm';
// import Home from './components/Home';
// import {Button} from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router><div className="App">
    
    {/* <button className="btn btn-primary btn-lg"></button> */}
    {/* <Button className="btn btn-primary btn-lg">This is a button</Button> */}
   <Routes>
         <Route exact path='/' element={<Navigate replace to="/optionpage" />}></Route>
         <Route exact path='/optionpage' element={< OptionPage />}></Route>
         <Route exact path='/signInUser' element={< SignInUser />}></Route>
         <Route exact path='/signInAdmin' element={< SignInAdmin />}></Route>
         <Route exact path='/createaccount' element={< CreateAcc />}></Route>
         <Route exact path='/userform' element={< UserForm />}></Route>;
         <Route exact path='/adminform' element={< AdminForm />}></Route>;
  </Routes>
  </div></Router>
  );
}

export default App;
