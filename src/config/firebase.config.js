// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZCpR7FU9bKd9IN2vFEL0yesA_MV2alzY",
  authDomain: "pet-adoption-project-ac299.firebaseapp.com",
  projectId: "pet-adoption-project-ac299",
  storageBucket: "pet-adoption-project-ac299.appspot.com",
  messagingSenderId: "804721038121",
  appId: "1:804721038121:web:958fb8473289b4d7629d38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;