// import {useEffect,useState} from "react";
// import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
// import {app} from "./firebase";
// import './App.css';
// import SignupPage from "./page/Signup";
// import SigninPage from "./page/Signin"

// const auth=getAuth(app);
// function App() {
//     const [user,setUser]=useState(null);
//     useEffect(()=>{
//         onAuthStateChanged(auth,(user)=>{
//             if(user){
//                 console.log("hello",user);
//                 setUser(user);
//             }
//             else{
//                 console.log('You are logged out')
//                 setUser(null);
//             }
//         })
//     },[]);
//     if (user===null){
//         return(
//             <>
//                 <SignupPage/>
//                 <SigninPage/>
//             </>
//         )
//     }
//   return (
//     <div className="App">
//         <h1>you are already login</h1>
//         <h1>{useEffect.email}</h1>
//         <button onClick={()=>signOut(auth)}>Logout</button>
        
//     </div>
//   );
// }
// export default App;

import React, { useState } from 'react';
import {useFirebase} from "./page/context/Firebase";
import "./App.css"
const App=()=>{
    const firebase=useFirebase();
    // console.log(firebase)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const putDataNew=()=>{
        firebase.putData('root/class10/class11',{id:12,"name":"ujala"});
    }
    return(
        <>
            <div className="App">
                <h1>Firebase</h1>
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <input 
                    type="password" 
                    placeholder="Enter passsword" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <button>Signin with Google</button>
                <button 
                    onClick={()=>{firebase.signupUserWithEmailAndPassword(email,password);
                    firebase.putData("users/"+"vikas",{email,password});
                }}

              
                >
                Signup</button>
                <button onClick={putDataNew}>Trigger</button>
            </div>
        </>
    )
}
export default App;


// fireStore
// import FireStore from "./firestore"
// const App=()=>{
//     return(
//         <>
//             <FireStore/>
//         </>
//     )
// }
// export default App;