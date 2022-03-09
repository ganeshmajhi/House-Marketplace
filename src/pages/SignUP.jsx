import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import OAuth from '../components/OAuth'
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
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
  const onSubmit = async(e) =>{
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      updateProfile(auth.currentUser,{
        displayName:name,

      })
      const copyFormData = {...formData}
      delete copyFormData.password
      copyFormData.timestamp = serverTimestamp()
      await setDoc(doc(db, 'users', user.uid), copyFormData)
      navigate('/')
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }
  return (
   <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>
            Welcome Back!
          </p>
        </header>
        <form onSubmit={onSubmit}>
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
          <OAuth />
        </form>
        <Link to='/sign-in' className='loginLink'>Sign In Instread</Link>
      </div>
   </>
  )
}

export default SignUP