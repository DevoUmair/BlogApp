import React, { useEffect, useState } from "react";
import './css/Home.css'
import { MdDelete } from 'react-icons/md';
import { getDocs , collection, doc, deleteDoc } from "firebase/firestore";
import {auth, db} from '../Firebase-config'
import {motion} from 'framer-motion'


function Home({ isAuth }) {
  const [postList , setPostList] = useState([]);
  
  const postCollectionRef = collection(db , "blogpost")

  useEffect(() => {
      const getPosts = async () => {
          const data = await getDocs(postCollectionRef)
          setPostList(data.docs.map((doc) => ({...doc.data() , id:doc.id})))
      }
      getPosts();
      
  })
  
  const deletePost = async (id) => {
    const postDoc = doc(db , "blogpost" , id )
     await deleteDoc(postDoc)
     window.location.reload(false);
  }

  return (
  <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x: window.innerWidth , transition:{duration:0.1}}} className="allPost" >
  {postList.map((post) => {

   return  <motion.div className="tweet-wrap" key={post.id} whileHover={{scale:1.05}} whileTap={{scale:1}} >

         <div className="tweet-header">
           <img src={post.author.photo} alt="" className="avator" ></img>
           <div className="tweet-header-info">
             {post.tittle} <span>@{post.author.name}</span> 
             <p>{post.postText}</p>
           </div>
         </div>
   
   
         <div className="tweet-info-counts">
           <div className="comments">
             <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
           </div>
           
           <div className="retweets">
             <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
           </div>
           
           <div className="likes">
             <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
           </div>
           
           <div className="message">
             <svg className="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
           </div>
          
          {isAuth && post.author.id === auth.currentUser.uid && (<MdDelete className="deleteBtn" onClick={() => {deletePost(post.id)}}/>)}
          
         </div>
   
       </motion.div>

  })}

  </motion.div>  

  );
}

export default Home;
