import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNpZQk2S-UjLRUnhnE9SiEAIgzpBE4xq0",
  // apiKey is moved to .env file and hidden in production
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "liam-firebase-857ed.firebaseapp.com",
  projectId: "liam-firebase-857ed",
  storageBucket: "liam-firebase-857ed.appspot.com",
  messagingSenderId: "382697279058",
  appId: "1:382697279058:web:acf7a0ab740a145e67598b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
