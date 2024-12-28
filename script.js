


const loginPage = document.getElementById("login-page");
const signupPage = document.getElementById("signup-page");

function showSignUpPage() {
  loginPage.style.display = "none";
  signupPage.style.display = "block";
}

function showLoginPage() {
  signupPage.style.display = "none";
  loginPage.style.display = "block";
}

const closeBtn = document.getElementById("close");
function closeAuthPage() {
  loginPage.style.display = "none";
  signupPage.style.display = "none";
}



