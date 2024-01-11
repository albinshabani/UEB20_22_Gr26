function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak password: Password should be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        return "Weak password: Password should contain uppercase, lowercase letters, and numbers.";
    } else {
        return "Strong password!";
    }
}

function validateEmail(email) {
    if (email.includes("@")) {
        return "Valid email!";
    } else {
        return "Invalid email: Please include '@' in the email address.";
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Get form field values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("countryinput").value;
    let flightType = document.querySelector('input[name="flight"]:checked');
    let email = document.getElementById("email").value;

    // Perform validations
    let passwordResult = checkPasswordStrength(password);
    let emailResult = validateEmail(email);

    // Display validation results (you can modify this to suit your UI)
    alert(`Password: ${passwordResult}\nEmail: ${emailResult}`);

    // Add additional logic or submit the form if needed
}