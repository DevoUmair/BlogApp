import React, { useState }  from "react";
import {addDoc, collection } from 'firebase/firestore'
import { db , auth} from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

function CreatePost() {
  const [tittle , setTittle] = useState("")
  const [postText , setpostText] = useState("")

  const postCollectionRef = collection(db , "blogpost")
  let navigate = useNavigate()

  const createpost = async () => {
     await addDoc(postCollectionRef , {
       tittle: tittle , 
       postText: postText , 
       author: { name: auth.currentUser.displayName  , id: auth.currentUser.uid , photo:auth.currentUser.photoURL } 
     })
     navigate("/")
    
  } 

  return (
    <motion.div className="createPostPage" initial={{width:0}} animate={{width:"100%"}} exit={{x: window.innerWidth , transition:{duration:0.1}}} >
      <div className="cpContainer">

        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input placeholder="Title..." onChange={(event) => {setTittle(event.target.value)}}/>
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea  placeholder="Post..."  onChange={(event) => {setpostText(event.target.value)}} />
        </div>
        <button onClick={createpost}> Submit Post</button>

      </div>
    </motion.div>
  );
}

export default CreatePost;



