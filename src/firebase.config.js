// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firesbase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ8ZY8ENKoKAQKZFn7IGCnNdw3Kob-Uts",
  authDomain: "house-marketplace-app-9e99e.firebaseapp.com",
  projectId: "house-marketplace-app-9e99e",
  storageBucket: "house-marketplace-app-9e99e.appspot.com",
  messagingSenderId: "743527168878",
  appId: "1:743527168878:web:d83afc3e8c6d5fb99a5f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()