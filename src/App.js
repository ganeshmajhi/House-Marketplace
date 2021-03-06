import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute'
import Explore from './pages/Explore'
import Category from './pages/Category'
import Navbar from './components/Navbar'
import ForgetPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIN from './pages/SignIN'
import SignUP from './pages/SignUP'
import CreateListing from './pages/CreateListing'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/:categoryName' element ={<Category/>}/>
        <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIN/>}/>
        <Route path='/sign-up' element={<SignUP/>}/>
        <Route path='/create-listing' element={<CreateListing/>}/>
      </Routes>
      <ToastContainer />
       <Navbar/>
      </Router>
     
    </>
  );
}

export default App;
