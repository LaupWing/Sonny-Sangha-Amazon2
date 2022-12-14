import { getApps, getApp, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCpnF3zeFI9v5dNOtLHDlbuhovfo7__M-Q",
   authDomain: "sonny-sangha.firebaseapp.com",
   projectId: "sonny-sangha",
   storageBucket: "sonny-sangha.appspot.com",
   messagingSenderId: "789737271920",
   appId: "1:789737271920:web:079cc02f568f8faacc7ab5",
   measurementId: "G-0T7ETG8F46",
}


const app = !getApps().length
   ? initializeApp(firebaseConfig)
   : getApp()

const db = getFirestore()

export default db
