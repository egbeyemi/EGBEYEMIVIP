import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_4RZD-zisiL3jIMZDHD4-7S5dfssNnEY",
  authDomain: "egbeyemi-vip.firebaseapp.com",
  projectId: "egbeyemi-vip",
  storageBucket: "egbeyemi-vip.firebasestorage.app",
  messagingSenderId: "976982842064",
  appId: "1:976982842064:web:53be3f838e5a96e0b0dcd5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
