import {useEffect,useState} from "react";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {app} from "./firebase";
import './App.css';
import SignupPage from "./page/Signup";
import SigninPage from "./page/Signin"

const auth=getAuth(app);
function App() {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log("hello",user);
                setUser(user);
            }
            else{
                console.log('You are logged out')
                setUser(null);
            }
        })
    },[])
  return (
    <div className="App">
        <h1>Firebase react app</h1>
        <SignupPage/>
        <SigninPage/>
    </div>
  );
}
export default App;

// import React, { useState } from 'react';
// import {useFirebase} from "./page/context/Firebase";
// import "./App.css"
// const App=()=>{
//     const firebase=useFirebase();
//     console.log(firebase)
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
    
//     return(
//         <>
//             <div className="App">
//                 <h1>Firebase</h1>
//                 <input 
//                     type="email" 
//                     placeholder="Enter Email" 
//                     onChange={(e)=>setEmail(e.target.value)}
//                     value={email}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Enter passsword" 
//                     onChange={(e)=>setPassword(e.target.value)}
//                     value={password}
//                 />
//                 <button>Signin with Google</button>
//                 <button 
//                     onClick={()=>{firebase.signupUserWithEmailAndPassword(email,password);
//                     firebase.putData("users/"+"vikas",{email,password});
//                 }}

              
//                 >
//                 Signup</button>
//             </div>
//         </>
//     )
// }
// export default App;


