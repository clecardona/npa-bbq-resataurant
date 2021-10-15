import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "yet-bbq.firebaseapp.com",
  projectId: "yet-bbq",
  storageBucket: "yet-bbq.appspot.com",
  messagingSenderId: "1086421258954",
  appId: "1:1086421258954:web:00a450ec1d260dce935a33",
};

const firebaseInstance = initializeApp(firebaseConfig);

export default firebaseInstance;
