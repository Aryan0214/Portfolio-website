function validate() {
    let isValid = true;

    // For validating email 
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.match(emailPattern)) {
        emailError.style.display = "inline";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // For validating username
    const username = document.getElementById("name");
    const usernameError = document.getElementById("nameError");
    if (username.value.length === 1 || username.value.length > 20) {
        usernameError.style.display = "inline";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

}




function validateLogin() {
    let isValid = true;

    // For validating username
    const username = document.getElementById("name");
    const usernameError = document.getElementById("nameError");
    if (username.value.length === 0 || username.value.length > 20) {
        usernameError.style.display = "inline";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    return isValid;
}

// Real-time validation feedback
document.getElementById("name").addEventListener("input", function () {
    const usernameError = document.getElementById("nameError");
    if (this.value.length === 0) {
        usernameError.style.display = "inline";
    } else {
        usernameError.style.display = "none";
    }
});


// Dynamic validation (real-time feedback)
document.getElementById("email").addEventListener("input", function () {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById("emailError");
    if (!this.value.match(emailPattern)) {
        emailError.style.display = "inline";
    } else {
        emailError.style.display = "none";
    }
});

document.getElementById("name").addEventListener("input", function () {
    const usernameError = document.getElementById("nameError");
    if (this.value.length === 0 || this.value.length > 20) {
        usernameError.style.display = "inline";
    } else {
        usernameError.style.display = "none";
    }
});
