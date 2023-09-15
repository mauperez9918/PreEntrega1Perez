// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC24GlbTIwXm5E86AuYUSjePmqnODD9IOE",
  authDomain: "sport-essentials.firebaseapp.com",
  projectId: "sport-essentials",
  storageBucket: "sport-essentials.appspot.com",
  messagingSenderId: "988988538586",
  appId: "1:988988538586:web:585ce4441163d3b71defe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
