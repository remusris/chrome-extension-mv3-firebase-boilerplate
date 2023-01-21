 
import { initalizeApp } from "firebase/app";

import { doc, setDoc } from "firebase/firestore";

import { getAuth } from "firebase/auth";

require 


let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// console.log("background!")

let auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

const colref = collection(db, "nodeOne")

// setDoc(doc(db, "cities") {
//   name: "LA",
//   state: "CA"
// })

chrome.history.onVisited.addListener(function (historyItem) {
    console.log(historyItem)
})  

getDocs(colref)
console.log(getDocs)

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

console.log(firebaseApp)