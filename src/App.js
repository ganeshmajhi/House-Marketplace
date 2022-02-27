import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore'
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
        <Route path='/profile' element={<SignIN/>} />
        <Route path='/signin' element={<SignIN/>}/>
        <Route path='/signup' element={<SignUP/>}/>
      </Routes>
      </Router>
      {/* { Navbar} */}
    </>
  );
}

export default App;
