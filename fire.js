// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKiuaEusVY40H1XTdwdsRHlJDA5IPk_f0",
    authDomain: "kride-b2e47.firebaseapp.com",
    projectId: "kride-b2e47",
    storageBucket: "kride-b2e47.appspot.com",
    messagingSenderId: "5147946173",
    appId: "1:5147946173:web:e07a69cf3a7ce7feb71bd4",
    measurementId: "G-N43FYNGZVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else{
        console.log('No User');
    }



});
