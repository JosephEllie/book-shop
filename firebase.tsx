// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRRYUXoDBSS5zIL02jefpnVtpCtBnm0oI",
    authDomain: "book-shop-5ac6c.firebaseapp.com",
    projectId: "book-shop-5ac6c",
    storageBucket: "book-shop-5ac6c.appspot.com",
    messagingSenderId: "723064654849",
    appId: "1:723064654849:web:4a173f5971bfb854264400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const firestore = 