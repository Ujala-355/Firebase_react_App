import React,{useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";
const auth=getAuth(app);
const SigninPage=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const singninUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>console.log("Signin success"))
            .catch((error)=>console.log(error));
    }
    return(
        <>  
            <div className="signin-page">
                <p>Enter your Email</p>
                <input 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email} 
                    placeholder="Enter your email here"
                    type="email" required
                />

                <p>Enter your Password</p>
                <input 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                    type="password" 
                    placeholder="Enter your password here" required
                />
                <button onClick={singninUser}>Signin me in</button>
            </div>
        </>
    )
}
export default SigninPage