// Import the functions you need from the SDKs you need
import { initializeApp } from "c:/Users/sadan/node_modules/firebase/app";
import { getAnalytics } from "c:/Users/sadan/node_modules/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfEssbjdUQLNf5fscjYsrxMrCGZ_utAzA",
  authDomain: "closetowork-cc754.firebaseapp.com",
  projectId: "closetowork-cc754",
  storageBucket: "closetowork-cc754.appspot.com",
  messagingSenderId: "667884710781",
  appId: "1:667884710781:web:c3d0f72cd5076d2d03ba14",
  measurementId: "G-N455VM5VGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
