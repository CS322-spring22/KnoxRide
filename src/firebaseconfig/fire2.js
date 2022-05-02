import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebase from "firebase";
//import 'firebase/compat/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyCKiuaEusVY40H1XTdwdsRHlJDA5IPk_f0",
    authDomain: "kride-b2e47.firebaseapp.com",
    projectId: "kride-b2e47",
    storageBucket: "kride-b2e47.appspot.com",
    messagingSenderId: "5147946173",
    appId: "1:5147946173:web:e07a69cf3a7ce7feb71bd4",
    measurementId: "G-N43FYNGZVP"
};

const fire2 = firebase.initializeApp(firebaseConfig);
const db = fire2.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.EmailAuthProvider.credential(email, password);

export { auth, provider, db };
export default fire2;