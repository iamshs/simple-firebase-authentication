
import './App.css';
import app from './firebase.int';
import {useState} from 'react'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const auth=getAuth(app)

function App() {
  const googleProvider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider()

  const [user,setUser]= useState({})

 const handleSignIn =()=>{
   signInWithPopup(auth,googleProvider)
   .then((result) => {
       const user = result.user
       setUser(user)
       console.log(user)
   })
   .catch((error)=>{
     console.error('eror',error)
   })
 }

 const handleGitSignIn =()=>{
   signInWithPopup(auth,gitProvider)
   .then((result) => {
    const user = result.user
    setUser(user)
    console.log(user)
})
.catch((error)=>{
  console.error('eror',error)
})
 }

 const handleSignOut=()=>{
   signOut(auth)
   .then (()=>{
     setUser({})
   })
   .catch(error=>{
    signOut(auth) 
   })
 }
  return (
    <div className="App">
      {
        user.useId? <button onClick={handleSignOut}>Sign out</button>:
        <>
        <button onClick={handleSignIn}>Google sign in</button>
        <button onClick={handleGitSignIn}>GitHub Sign In</button>
        </>
     
      }
     
      {/* <img src={user.photoURL} alt="" /> */}
     <h2>Name:{user.displayName}</h2>
     <p>Email:{user.email}</p>
    </div>
  );
}

export default App;
