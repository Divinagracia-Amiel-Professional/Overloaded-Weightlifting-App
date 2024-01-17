// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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