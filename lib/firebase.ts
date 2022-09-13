import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUJpMLbtFKhdQxhwIPeAA4xBRLRZPWcIk",
  authDomain: "nextfire-f86d7.firebaseapp.com",
  projectId: "nextfire-f86d7",
  storageBucket: "nextfire-f86d7.appspot.com",
  messagingSenderId: "447954809318",
  appId: "1:447954809318:web:2940becf228d2aa126e627",
  measurementId: "G-EZ7801WYN8",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
