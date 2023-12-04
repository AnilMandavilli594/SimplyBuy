// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6HxP1PxjyvvgMrrxFpbVZE0yW7JR1Q8",
  authDomain: "eccfinalproject-f4f73.firebaseapp.com",
  projectId: "eccfinalproject-f4f73",
  storageBucket: "eccfinalproject-f4f73.appspot.com",
  messagingSenderId: "1014151117066",
  appId: "1:1014151117066:web:2a93b08666a2a677da22f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;