
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXmXdCWfQQpYDvO82aCMeiHkc-UDV5fGk",
  authDomain: "royal-saints.firebaseapp.com",
  projectId: "royal-saints",
  storageBucket: "royal-saints.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "AIzaSyAXmXdCWfQQpYDvO82aCMeiHkc-UDV5fGk"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
