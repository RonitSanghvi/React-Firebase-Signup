// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // Import Firestore

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHoH1GtZ4q_YApfHpsA1U-Amks0DC-6dY",
  authDomain: "react-firebase-auth-b7093.firebaseapp.com",
  projectId: "react-firebase-auth-b7093",
  storageBucket: "react-firebase-auth-b7093.appspot.com",
  messagingSenderId: "190868097804",
  appId: "1:190868097804:web:05d5b90271de87f2895729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}