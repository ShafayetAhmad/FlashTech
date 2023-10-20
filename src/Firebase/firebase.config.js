// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBudFLADOFkUXwVzMySdcCQ9BtTXDjoh-w",
  authDomain: "flashtech-client.firebaseapp.com",
  projectId: "flashtech-client",
  storageBucket: "flashtech-client.appspot.com",
  messagingSenderId: "307772020907",
  appId: "1:307772020907:web:552e0c44c5e24ae5c43fee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
