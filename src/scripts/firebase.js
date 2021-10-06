import { initializeApp } from "firebase/app";

const firebaseConfiguration = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "npa-bbq-restaurant.firebaseapp.com",
  projectId: "npa-bbq-restaurant",
  storageBucket: "npa-bbq-restaurant.appspot.com",
  messagingSenderId: "992711479795",
  appId: "1:992711479795:web:a446d85b325ba48c7bc286",
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export default firebaseInstance;
