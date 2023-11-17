import React,{useState} from "react";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from "../firebase";
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

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
    const signupWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
    }
    const signupUser=()=>{
        createUserWithEmailAndPassword(
          auth,
          "ujala@gmail.com",
          "ujala@123"
        ).then((value)=>console.log(value));
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
                    placeholder="Enter your password here" required
                />
                <button onClick={signupWithGoogle}>Signin with Google</button>
                <button onClick={createUser}>Signup</button>
            </div>
        </>
    )
}
export default SignupPage;


