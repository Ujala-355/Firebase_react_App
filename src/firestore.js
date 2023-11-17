import {getFirestore, collection, addDoc} from "firebase/firestore";
import {app} from "./firebase";

const firestore=getFirestore(app);
const FireStore=()=>{
    const writeData=async()=>{
        const result=await addDoc(collection(firestore,'cities'),{
            name:"kanpur",
            pinCode:208017,
            lat:145,
            long:555,  
        })
        console.log('Result',result)
    }
    return(
        <>
            <h1>FireStore</h1>
            <button onClick={writeData}>Put Data</button>
        </>
    )
}
export default FireStore;