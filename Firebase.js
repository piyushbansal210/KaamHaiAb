// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpkOplAUaO8Q29fzhrFX4RKmiS1GhAwF4",
  authDomain: "kaamhaiab-8d439.firebaseapp.com",
  projectId: "kaamhaiab-8d439",
  storageBucket: "kaamhaiab-8d439.appspot.com",
  messagingSenderId: "1007987727533",
  appId: "1:1007987727533:web:796fd339c7937a55473a24",
  measurementId: "G-7Z3QN5N7P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage(app);