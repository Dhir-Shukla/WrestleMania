// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { apps, initializeApp, auth } from 'firebase/app';
import { getAuth }from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiI7pZdQcPFzPvRVAjU_GVM71TYmn9CVc",
  authDomain: "wrestlemania-38e75.firebaseapp.com",
  projectId: "wrestlemania-38e75",
  storageBucket: "wrestlemania-38e75.appspot.com",
  messagingSenderId: "552759532572",
  appId: "1:552759532572:web:349c9292c2ef4085ff93d9",
  measurementId: "G-QQSK8N0FKH"
};

// Initialize Firebase

 let app;
// if (firebase.apps.length == 0) {
//     app = initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }
app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

// Initialize firebase app authorization service
export const authService = getAuth(app);

// Initialize firestore database
export const db = getFirestore(app);


