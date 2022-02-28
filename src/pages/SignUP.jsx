import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
function SignUP() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password: '',

  })
  const {name,email,password} = formData
  const navigate = useNavigate()
  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  }
  return (
   <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>
            Welcome Back!
          </p>
        </header>
        <form>
        <input type="text" className='nameInput' placeholder='Name' id="name" value={name} onChange={onChange} />
          <input type="email" className='emailInput' placeholder='Email' id="email" value={email} onChange={onChange} />
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id="password" value={password} onChange={onChange} />
            <img src={visibilityIcon} alt="visibility" className='showPassword' onClick={()=>setShowPassword((prevState)=>!prevState)} />
          </div>
          <Link to='/forget-password' className='forgetPasswordLink'>
          Forget Password
          </Link>
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill='#ffffff' height='34px' width='34px'/>
            </button>
          </div>
          {/* { Google Oauth} */}
        </form>
        <Link to='/signin' className='loginLink'>Sign In Instread</Link>
      </div>
   </>
  )
}

export default SignUP