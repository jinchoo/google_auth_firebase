// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLyjUmD6VHVCfNXyBh5WhFB7bUvcYRQQ",
  authDomain: "auth-yt-92804.firebaseapp.com",
  projectId: "auth-yt-92804",
  storageBucket: "auth-yt-92804.appspot.com",
  messagingSenderId: "806284547245",
  appId: "1:806284547245:web:60a8fa2e51ff86d3c1a224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);