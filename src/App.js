import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase";
import './App.css';
import SignupPage from "./page/Signup";
import SigninPage from "./page/Signin"

const auth=getAuth(app);
function App() {
  const signupUser=()=>{
      createUserWithEmailAndPassword(
        auth,
        "ujala@gmail.com",
        "ujala@123"
      ).then((value)=>console.log(value));
  }
  return (
    <div className="App">
        <h1>Firebase react app</h1>
        <SignupPage/>
        <SigninPage/>
    </div>
  );
}

export default App;
