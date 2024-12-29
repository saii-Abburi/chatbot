import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase Configuration
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
// Signup Functionality
const signup = document.getElementById("signupBtn");
signup.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const authMessage = document.getElementById("authmessage");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Show success message
      authMessage.classList.add("success");
      authMessage.textContent = "Signup successful!";

      // Redirect after 3 seconds
      setTimeout(() => {
        window.location = "./main.html";
      }, 3000);
    })
    .catch((error) => {
      // Handle and display error
      const errorMessage = error.message;
      authMessage.classList.add("error");
      authMessage.textContent = `Error: ${errorMessage}`;

      // Hide error message after 3 seconds
      setTimeout(() => {
        authMessage.style.display = "none";
      }, 3000);
    });
});

// Login Functionality
const login = document.getElementById("loginBtn");
login.addEventListener("click", (e) => {

  e.preventDefault();
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;
  const authMessage = document.getElementById("authmessage");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      authMessage.classList.add("success");
      authMessage.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location = "./main.html";
        authMessage.classList.remove("success");
      }, 3000);
    })
    .catch((error) => {
      // Handle and display error
      const errorMessage = error.message;
      authMessage.classList.add("error");
      authMessage.textContent = `Error: ${errorMessage}`;

      // Hide error message after 3 seconds
      setTimeout(() => {
        authMessage.style.display = "none";
      }, 3000);
    });
});
