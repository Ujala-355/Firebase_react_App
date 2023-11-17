import {createContext,useContext,useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, set, ref,get,child, onValue} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAxSgCDpkWn7KsJXq2AhWsK3JbBQJaKTos",
    authDomain: "app-e6ea8.firebaseapp.com",
    projectId: "app-e6ea8",
    storageBucket: "app-e6ea8.appspot.com",
    messagingSenderId: "166957171582",
    appId: "1:166957171582:web:002426a87302079e5da92f",
    databaseURL:"https://app-e6ea8-default-rtdb.firebaseio.com",
  };
const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const database=getDatabase(firebaseApp);
const FirebaseContext=createContext(null);
export const useFirebase=()=>useContext(FirebaseContext);

const FirebaseProvider=(props)=>{
    const [name,setName]=useState("");
    const signupUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const putData=(key,data)=>set(ref(database,key),data);

    // get(child(ref(database),"root/class10/class11")).then((snapshot)=>{
    //     console.log(snapshot.val())
    // });
    useEffect(()=>{
        onValue(ref(database,"root/a/b"),(snapshot)=>
        // console.log(snapshot.val())
        setName(snapshot.val().name)
        )
    },[])
    return(
        <>
            <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
                <h3>name is {name}</h3>
                {props.children}
            </FirebaseContext.Provider>
        </>
    )
}
export default FirebaseProvider;