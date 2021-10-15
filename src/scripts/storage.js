import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Create a root reference
const storage = getStorage();

export default async function uploadImage(firebaseContext, file) {
  const myRef = ref(storage, `${file.name}_${Date.now()}`);
  await uploadBytes(myRef, file).then((snapshot) => {});
  return getDownloadURL(myRef);
}
