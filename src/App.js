import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './pages/Explore'
import Navbar from './components/Navbar'
import ForgetPassword from './pages/ForgotPassword'
import Offer from './pages/Offer'
import Profile from './pages/Profile'
import SignIN from './pages/SignIN'
import SignUP from './pages/SignUP'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element={<SignIN/>}/>
        <Route path='/signup' element={<SignUP/>}/>
      </Routes>
      <ToastContainer />
       <Navbar/>
      </Router>
     
    </>
  );
}

export default App;
