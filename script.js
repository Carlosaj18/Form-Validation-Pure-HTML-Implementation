const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorName = document.getElementById("errorName");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");
const formRegister = document.getElementById("formRegister");

const usernameInput = document.getElementById("username");
const loginPasswordInput = document.getElementById("loginPassword");
const errorUsername = document.getElementById("errorUsername");
const errorLoginPassword = document.getElementById("errorLoginPassword");
const formLogin = document.getElementById("formLogin");

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

loginButton.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

registerButton.addEventListener("click", () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
});

loginButton.addEventListener("click", () => {
  loginButton.classList.add("selected");
  registerButton.classList.remove("selected");
});

registerButton.addEventListener("click", () => {
  registerButton.classList.add("selected");
  loginButton.classList.remove("selected");
});

// Add validation login form
formLogin.addEventListener("submit", (e) => {
  let messagesUsername = [];
  let messagesPassword = [];

  if (usernameInput.value.trim() === "") {
    messagesUsername.push("Username is required");
    usernameInput.classList.add("input-error");
  } else {
    usernameInput.classList.remove("input-error");
  }

  if (loginPasswordInput.value.trim() === "") {
    messagesPassword.push("Password is required");
    loginPasswordInput.classList.add("input-error");
  } else {
    loginPasswordInput.classList.remove("input-error");
  }

  // Display error messages
  errorUsername.innerText = messagesUsername.join(", ");
  errorLoginPassword.innerText = messagesPassword.join(", ");

  if (messagesUsername.length > 0 || messagesPassword.length > 0) {
    e.preventDefault();
  }
});

// Add validation register form
registerForm.addEventListener("submit", (e) => {
  let messagesName = [];
  let messagesPassword = [];
  let messagesConfirmPassword = [];

  if (nameInput.value.trim() === "") {
    messagesName.push("Name is required");
    nameInput.classList.add("input-error"); // Add class to input field
  } else {
    nameInput.classList.remove("input-error"); // Remove class if no error
  }

  if (passwordInput.value.trim() === "") {
    messagesPassword.push("Password is required");
    passwordInput.classList.add("input-error"); // Add class to input field
  } else if (passwordInput.value.length < 6) {
    messagesPassword.push("Password must be at least 6 characters long");
    passwordInput.classList.add("input-error"); // Add class to input field
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}/.test(
      passwordInput.value
    )
  ) {
    messagesPassword.push(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    );
    passwordInput.classList.add("input-error"); // Add class to input field
  } else {
    passwordInput.classList.remove("input-error"); // Remove class if no error
  }

  if (confirmPasswordInput.value.trim() === "") {
    messagesConfirmPassword.push("Confirm Password is required");
    confirmPasswordInput.classList.add("input-error"); // Add class to input field
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    messagesConfirmPassword.push("Passwords do not match");
    confirmPasswordInput.classList.add("input-error"); // Add class to input field
  } else {
    confirmPasswordInput.classList.remove("input-error"); // Remove class if no error
  }

  // Display error messages
  errorName.innerText = messagesName.join(", ");
  errorPassword.innerText = messagesPassword.join(", ");
  errorConfirmPassword.innerText = messagesConfirmPassword.join(", ");

  if (
    messagesName.length > 0 ||
    messagesPassword.length > 0 ||
    messagesConfirmPassword.length > 0
  ) {
    e.preventDefault();
  }
});

// Clear error messages and input errors on input
usernameInput.addEventListener("input", () => {
  errorUsername.innerText = "";
  usernameInput.classList.remove("input-error"); // Remove input error class
});

loginPasswordInput.addEventListener("input", () => {
  errorLoginPassword.innerText = "";
  loginPasswordInput.classList.remove("input-error"); // Remove input error class
});

nameInput.addEventListener("input", () => {
  errorName.innerText = "";
  nameInput.classList.remove("input-error"); // Remove input error class
});

passwordInput.addEventListener("input", () => {
  errorPassword.innerText = "";
  passwordInput.classList.remove("input-error"); // Remove input error class
});

confirmPasswordInput.addEventListener("input", () => {
  errorConfirmPassword.innerText = "";
  confirmPasswordInput.classList.remove("input-error"); // Remove input error class
});
