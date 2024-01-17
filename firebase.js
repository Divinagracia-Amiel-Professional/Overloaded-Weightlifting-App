import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };