// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATCGYSeuA4EThQnqQxe0lkQnX_N-i0Kfc",
  authDomain: "proyecto-react-ffb.firebaseapp.com",
  projectId: "proyecto-react-ffb",
  storageBucket: "proyecto-react-ffb.appspot.com",
  messagingSenderId: "596020665421",
  appId: "1:596020665421:web:2a0bf98ced9ca22ff91004",
  measurementId: "G-H4K7231QMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()




const analytics = getAnalytics(app);

export default db