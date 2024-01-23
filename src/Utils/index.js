// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5bRdfJFrSrIN6m35eOmOFuWLHp2EvT5A",
  authDomain: "dentalclinicmanagementpallavi.firebaseapp.com",
  projectId: "dentalclinicmanagementpallavi",
  storageBucket: "dentalclinicmanagementpallavi.appspot.com",
  messagingSenderId: "524183737898",
  appId: "1:524183737898:web:ffcb522deee3bdc1e61553",
  measurementId: "G-C0V2M04M38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);