// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ6_bLfty6E2u5P0gazNPWL5G9GioaMu8",
  authDomain: "jobcom-b75ef.firebaseapp.com",
  projectId: "jobcom-b75ef",
  storageBucket: "jobcom-b75ef.appspot.com",
  messagingSenderId: "761141779885",
  appId: "1:761141779885:web:f6011c38ac24d073b99524",
  measurementId: "G-K9Y8VZ43TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
// const analytics = getAnalytics(app);

const firebaseEngine = { db, auth };
export default firebaseEngine;