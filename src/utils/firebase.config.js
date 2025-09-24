import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA2pgZEH7kxOmzi-Qg1mxdCyqL-5VrzTi0",
    authDomain: "drama-x.firebaseapp.com",
    projectId: "drama-x",
    storageBucket: "drama-x.firebasestorage.app",
    messagingSenderId: "1012158227127",
    appId: "1:1012158227127:web:19495d9d6351e32840a332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);