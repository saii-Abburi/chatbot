import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Fire base authentication
const firebaseConfig = {
  apiKey: "AIzaSyAc-J55zmmzcP5oY0pYcBnp0CO_wxVXCM4",
  authDomain: "botbuddy-7267b.firebaseapp.com",
  projectId: "botbuddy-7267b",
  storageBucket: "botbuddy-7267b.firebasestorage.app",
  messagingSenderId: "901160595237",
  appId: "1:901160595237:web:73f9bc46452e94361534cc",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signup = document.getElementById("signupBtn");

signup.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Successfully Created");
      window.location = "./main.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
});


