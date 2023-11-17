import { getFirestore, collection, addDoc, doc, getDoc, query,where,getDocs,updateDoc} from "firebase/firestore";
import { app } from "./firebase";

const firestore = getFirestore(app);
const FireStore = () => {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, 'cities'), {
      name: "kanpur",
      pinCode: 208017,
      lat: 145,
      long: 555,
    });
    console.log('Result', result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, 'cities/n3fgW9lIy3YQQ5BM7QF0/places'), {
      name: 'Radhe temple',
      desc: "Vrindavan",
      data: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "n3fgW9lIy3YQQ5BM7QF0");
    const documentSnapshot = await getDoc(ref);
    
    if (documentSnapshot.exists()) {
      console.log('Document data:', documentSnapshot.data());
    } else {
      console.log('Document does not exist');
    }
  };
  const getDocumentsByQuesry=async()=>{
    const collectionRef=collection(firestore,"information");
    const q=query(collectionRef, where('gender',"==","female"));
    const snapshot=await getDocs(q);
    snapshot.forEach((doc)=>
        console.log(doc.id,"=>",doc.data()));
  };
  const update=async()=>{
      const docRef=doc(firestore,'cities','n3fgW9lIy3YQQ5BM7QF0');
      await updateDoc(docRef,{
        name:"kanpur nagar"
      })
  }
  return (
    <>
      <h1>FireStore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put SubData</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuesry}>Get Document by Query</button>
      <button onClick={update}>update data</button>
    </>
  );
};

export default FireStore;
