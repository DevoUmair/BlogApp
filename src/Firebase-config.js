import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAsrAmAajNluGeSLSr5XWmj7ui4hfvob3g",
    authDomain: "blog-app-e29fc.firebaseapp.com",
    projectId: "blog-app-e29fc",
    storageBucket: "blog-app-e29fc.appspot.com",
    messagingSenderId: "7340717157",
    appId: "1:7340717157:web:e4b3d0b42cefd3c1f7828c"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider()
export const db = getFirestore(app);
  
  