// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHkHkWTm4Syn391rdOP_e25dh138DRTDM",
  authDomain: "react-movie-project-f1a96.firebaseapp.com",
  projectId: "react-movie-project-f1a96",
  storageBucket: "react-movie-project-f1a96.appspot.com",
  messagingSenderId: "1061305026779",
  appId: "1:1061305026779:web:ae391ce3f913e62d43a4fe"
};



// Initialize Firebase Authentication and get a reference to the service
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
