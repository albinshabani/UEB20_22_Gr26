// Function to toggle password visibility
function togglePassword(fieldId) {
    let passwordField = document.getElementById(fieldId);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Function to toggle between Login and Signup forms
function toggleForm() {
    const forms = document.querySelector(".forms");
    forms.classList.toggle("show-signup");
}

// Function to validate Login form
function validateLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Basic validation - you can add more sophisticated validation as needed
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

// Function to validate Signup form
function validateSignup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation - you can add more sophisticated validation as needed
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!/\d/.test(password)) {
        alert("Password must contain at least one number.");
        return false;
    }

    if (!/@mail\.com$/.test(email)) {
        alert("Email must end with @mail.com.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Additional validation logic can be added here

    return true;
}
