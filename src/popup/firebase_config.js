import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

// TODO Fill Me! 
// Find my details from Firebase Console

// config after registering firebase App 
const config = {
    apiKey: "AIzaSyCtFcUZYlwT_x4jG0dfhsDB0f2q3nD1hcw",
    authDomain: "rabbit-holes-3e150.firebaseapp.com",
    projectId: "rabbit-holes-3e150",
    storageBucket: "rabbit-holes-3e150.appspot.com",
    messagingSenderId: "500945067774",
    appId: "1:500945067774:web:f7788e6068ad01a4434faf",
    measurementId: "G-N7NZLN9HE8"
};

// This creates firebaseApp instance
// version: SDK 9
const firebaseApp = initializeApp(config)

export{
    firebaseApp
}