// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import 'firebase/database'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsSxY8Cut8HXx_V1Q-M2sE7JRpm54nIsI",
  authDomain: "healthyappsskripsi.firebaseapp.com",
  databaseURL: "https://healthyappsskripsi-default-rtdb.firebaseio.com",
  projectId: "healthyappsskripsi",
  storageBucket: "healthyappsskripsi.appspot.com",
  messagingSenderId: "805888188727",
  appId: "1:805888188727:web:932a250b2eb27bce28fab2",
  measurementId: "G-V5KD17ZYSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)
export const FIRESTORE_DB = getFirestore(app)

export default app
