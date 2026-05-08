// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJZhVfaRmTIlBu73yaBcZP_s4w_5waegQ",
  authDomain: "fir-homework-83479.firebaseapp.com",
  projectId: "fir-homework-83479",
  storageBucket: "fir-homework-83479.firebasestorage.app",
  messagingSenderId: "346602428213",
  appId: "1:346602428213:web:bfa0adad0e5db240ab1e7c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth ();