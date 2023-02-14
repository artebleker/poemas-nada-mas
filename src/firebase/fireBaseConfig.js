// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClFHH2orAMGE7MvVnno7NcNCQJ_JXFqU4",//process.env.REACT_APP_API_KEY,
  authDomain: "poemasnadamas-f4eb4.firebaseapp.com",//process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "poemasnadamas-f4eb4",//process.env.REACT_APP_PROJECT_ID,
  storageBucket: "poemasnadamas-f4eb4.appspot.com",//process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "590629501240",//process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:590629501240:web:6b32980845db90c56729cd"//process.env.REACT_APP_APP_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
export {app};
