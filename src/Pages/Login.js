import React from 'react';
import {auth , provider} from '../Firebase-config';
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import './css/Login.css'
import {motion} from 'framer-motion'

function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
      signInWithPopup(auth , provider).then((result) => {
           localStorage.setItem("isAuth" , true);
           setIsAuth(true)
           navigate("/")
      })
  }

  return (
    <motion.div className='loginPage' initial={{width:0}} animate={{width:"100%"}} exit={{x: window.innerWidth , transition:{duration:0.1}}} >
      <p>Sign In With Google Button To Continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}> Sign In With Google Button</button>
    </motion.div>
  )
}

export default Login