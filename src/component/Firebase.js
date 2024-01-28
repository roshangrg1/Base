import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBu7cxR4gRLkAmRbHdGYCKly00j21OxL4o",
    authDomain: "base-d6a4b.firebaseapp.com",
    projectId: "base-d6a4b",
    storageBucket: "base-d6a4b.appspot.com",
    messagingSenderId: "689880689740",
    appId: "1:689880689740:web:703fd7aa2b181f989ed8e9",
    measurementId: "G-Y3Z4LBDWJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };