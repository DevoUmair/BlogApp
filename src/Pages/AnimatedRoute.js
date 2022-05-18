import React from 'react'
import { Routes , Route , useLocation} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import CreatePost from './CreatePost'

import {AnimatePresence} from 'framer-motion'

function AnimatedRoute({isAuth , setIsAuth}) {

  const location = useLocation();

  return (
      <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home isAuth={isAuth} />} />
                    <Route path='/Login' element={<Login  setIsAuth={setIsAuth} />} />
                    <Route path='/Createpost' element={<CreatePost />} />
            </Routes>
      </AnimatePresence>
   
  )
}

export default AnimatedRoute