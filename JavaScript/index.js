"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCBSidRgtADAwuTOG6NPGYjBp8i5vxQY60",
  authDomain: "javatastic-c0c6b.firebaseapp.com",
  databaseURL: "https://javatastic-c0c6b-default-rtdb.firebaseio.com",
  projectId: "javatastic-c0c6b",
  storageBucket: "javatastic-c0c6b.appspot.com",
  messagingSenderId: "717299492395",
  appId: "1:717299492395:web:a3e68438b296b6c4c9ec6e",
  measurementId: "G-SRR7R7YKP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//Get Auth elements
$(document).ready(function(){
  const signInElem = $("#sign-in");
  const signOutElem = $("#sign-out");
  const signInBtn = $("#sign-in-btn");
  const signOutBtn = $("#sign-out-btn");
  const accountName = $("#account-name");

  

  signInBtn.click(function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  })
  
  signOutBtn.click(function() {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  })
  
  onAuthStateChanged(auth, (user) => {
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      
      signOutElem.show();
      signInElem.hide();
      accountName.text(`${user.displayName} ${user.uid}`);
      // ...
    } else {
      console.log("HII");
      // User is signed out
      // ...
      signOutElem.hide();
      signInElem.show();
      accountName.text('');
    }
  });
  
});


/*
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'it';
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});*/

