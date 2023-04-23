// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPQ-zLPIBVKIOAPc9BUAll5JwyN6UPZO4",
  authDomain: "notifypush-5f6e0.firebaseapp.com",
  projectId: "notifypush-5f6e0",
  storageBucket: "notifypush-5f6e0.appspot.com",
  messagingSenderId: "449749052800",
  appId: "1:449749052800:web:3c98453d0034b4d925e565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)