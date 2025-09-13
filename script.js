// ===============================
// Part 1: Event Handling
// ===============================
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "🎉 Hello, welcome to interactivity!";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Light/Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// ===============================
// Part 3: Form Validation
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  let valid = true;

  // Name validation (not empty)
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation (min 6 characters)
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success feedback
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Registration successful!";
    document.getElementById("signupForm").reset();
  }
});
