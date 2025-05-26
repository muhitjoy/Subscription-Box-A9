// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQkGg_4tGvAlEogR1LeokpKX1QvRE5V9w",
  authDomain: "subscription-box-d916e.firebaseapp.com",
  projectId: "subscription-box-d916e",
  storageBucket: "subscription-box-d916e.firebasestorage.app",
  messagingSenderId: "412363140503",
  appId: "1:412363140503:web:5df1e77927a2d4a09fa8d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;