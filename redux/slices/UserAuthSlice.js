import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  // your config here
};
firebase.initializeApp(firebaseConfig);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(action.payload.email, action.payload.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          state.user = user;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
    logout: (state) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          state.user = null;
        })
        .catch((error) => {
          // An error happened.
        });
    },
    sync: (state) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          state.user = user;
        } else {
          state.user = null;
        }
      });
    },
  },
});

export default authSlice.reducer;
export const { login, logout, sync } = authSlice.actions;