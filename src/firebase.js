
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmXUHOeeI7FTexDhRbYCth76vE5w29Nq8",
  authDomain: "deployment-project-f3ae4.firebaseapp.com",
  projectId: "deployment-project-f3ae4",
  storageBucket: "deployment-project-f3ae4.appspot.com",
  messagingSenderId: "713889228498",
  appId: "1:713889228498:web:8ac8294fa6d170c2816f0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Performance Monitoring and get a reference to the service
getPerformance(app);