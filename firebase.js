import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCen06Ej19k2k0K4IRlnVAQbsypWD6uhWw",
  authDomain: "overloaded-app.firebaseapp.com",
  projectId: "overloaded-app",
  storageBucket: "overloaded-app.appspot.com",
  messagingSenderId: "702603637326",
  appId: "1:702603637326:web:bc98f6ba5353b59ddf091f",
  measurementId: "G-3NDLW719RP"
};

// Initialize Firebase
export const fire_app = initializeApp(firebaseConfig);
export const fire_auth = getAuth(fire_app);
const analytics2 = getAnalytics(fire_app);