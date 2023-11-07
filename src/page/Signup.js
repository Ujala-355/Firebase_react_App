import React,{useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";
const auth=getAuth(app);
const SignupPage=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    }
    return(
        <>
            <div className="signup-page">
                <p>Email</p>
                <input 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email} 
                    placeholder="Enter your email here"
                    type="email" required />

                <p>Password</p>
                <input 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                    type="password" 
                    placeholder="Enter your password here" required/>

                <button onClick={createUser}>Signup</button>
            </div>
        </>
    )
}
export default SignupPage;


