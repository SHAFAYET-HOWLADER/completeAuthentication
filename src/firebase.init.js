// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjHK8UX99MBw_gwyUcQNQ_BXMrarBpK9U",
  authDomain: "completeauthentication-a4843.firebaseapp.com",
  projectId: "completeauthentication-a4843",
  storageBucket: "completeauthentication-a4843.appspot.com",
  messagingSenderId: "1035008646583",
  appId: "1:1035008646583:web:bbe8bb3fef77222e005c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;