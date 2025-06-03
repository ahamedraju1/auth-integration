// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6dNCkWCnZ7aIkRk_yL9jNywT5tyqNDeY",
  authDomain: "auth-integration-4704c.firebaseapp.com",
  projectId: "auth-integration-4704c",
  storageBucket: "auth-integration-4704c.firebasestorage.app",
  messagingSenderId: "862309321486",
  appId: "1:862309321486:web:542d137fe1aa5546aea55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);