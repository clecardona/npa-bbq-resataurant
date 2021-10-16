import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bbq-restaurant-2a1ce.firebaseapp.com",
  projectId: "bbq-restaurant-2a1ce",
  storageBucket: "bbq-restaurant-2a1ce.appspot.com",
  messagingSenderId: "567848685067",
  appId: "1:567848685067:web:c4046583dacac842d1c10e",
};

const firebaseInstance = initializeApp(firebaseConfig);

export default firebaseInstance;
