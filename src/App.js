import React, { useState } from 'react';
import {BrowserRouter as Router , Link } from 'react-router-dom'
import './App.css';
import {signOut} from 'firebase/auth'
import { auth } from './Firebase-config';


import AnimatedRoute from './Pages/AnimatedRoute';


function App() {
  const [isAuth , setIsAuth] = useState(false)



  const signUserOut = () => {
     signOut(auth).then(() => {
       localStorage.clear()
       setIsAuth(false)
       window.location.pathname = "/Login"
     })
  }

  return (
    <Router>

      <nav style={{zIndex: "100"}}>
        <h4> Blog App</h4>
        <div className='Links'>
            <Link to='/'>Home</Link>
            { isAuth && <Link to='/Createpost'>Create Post</Link> } 
            { !isAuth ? <Link to='/Login'>Login</Link> : <button className='logout' onClick={signUserOut}>Logout</button> } 
        </div>
      </nav>
      
      <AnimatedRoute isAuth={isAuth}  setIsAuth={setIsAuth}/>

      <footer>
        <p>BLOG APP© Copyright 2022. Designed and Developed by Umair Lafir.</p>
      </footer>
    </Router>
  );
}

export default App;
