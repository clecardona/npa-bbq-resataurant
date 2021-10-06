// NPM packages
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

// Create file
export async function createDoc(db, path, data) {
  const docRef = await addDoc(collection(db, path), data);
  console.log("Document written with ID: ", docRef.id);
}

// Read files
export async function getCollection(db, path) {
  const myCollection = collection(db, path);
  const mySnapshot = await getDocs(myCollection);
  const myList = mySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return myList;
}
