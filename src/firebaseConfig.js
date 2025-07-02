
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXmXdCWfQQpYDvO82aCMeiHkc-UDV5fGk",
  authDomain: "royal-saints.firebaseapp.com",
  projectId: "royal-saints",
  storageBucket: "royal-saints.firebasestorage.app",
  messagingSenderId: "803045117664",
  appId: "1:803045117664:web:49ef2f7aea1bd0f2c10a85",
  measurementId: "G-1ZXRV681YB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
