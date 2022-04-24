// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTyDc9RuOg344bAk2NiShYa9-og7qBkD0",
  authDomain: "my-todo-7ed78.firebaseapp.com",
  projectId: "my-todo-7ed78",
  storageBucket: "my-todo-7ed78.appspot.com",
  messagingSenderId: "1029957498529",
  appId: "1:1029957498529:web:ff848dacf2d5b643e822e0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }