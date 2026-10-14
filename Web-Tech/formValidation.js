function setError(id, message) {
    document.getElementById(id + "Error").textContent = message;
    return message === "";
}

function validateName() {
    var v = document.getElementById("name").value.trim();
    if (v === "") return setError("name", "Name is required.");
    if (!/^[A-Za-z ]+$/.test(v)) return setError("name", "Name must contain only letters and spaces.");
    if (v.length < 3) return setError("name", "Name must be at least 3 characters.");
    return setError("name", "");
}

function validateEmail() {
    var v = document.getElementById("email").value.trim();
    if (v === "") return setError("email", "Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return setError("email", "Enter a valid email address.");
    return setError("email", "");
}

function validatePhone() {
    var v = document.getElementById("phone").value.trim();
    if (v === "") return setError("phone", "Phone number is required.");
    if (!/^[6-9][0-9]{9}$/.test(v)) return setError("phone", "Enter a valid 10-digit number starting with 6-9.");
    return setError("phone", "");
}

function validateAge() {
    var v = document.getElementById("age").value;
    if (v === "") return setError("age", "Age is required.");
    var n = Number(v);
    if (!Number.isInteger(n) || n < 18 || n > 100) return setError("age", "Age must be a whole number between 18 and 100.");
    return setError("age", "");
}

function validatePassword() {
    var v = document.getElementById("password").value;
    if (v === "") return setError("password", "Password is required.");
    if (v.length < 8) return setError("password", "Password must be at least 8 characters.");
    if (!/[A-Z]/.test(v) || !/[a-z]/.test(v) || !/[0-9]/.test(v))
        return setError("password", "Use uppercase, lowercase and a digit.");
    return setError("password", "");
}

function validateConfirm() {
    var p = document.getElementById("password").value;
    var c = document.getElementById("confirm").value;
    if (c === "") return setError("confirm", "Please confirm your password.");
    if (p !== c) return setError("confirm", "Passwords do not match.");
    return setError("confirm", "");
}

// Live validation while typing
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("age").addEventListener("input", validateAge);
document.getElementById("password").addEventListener("input", function () {
    validatePassword();
    if (document.getElementById("confirm").value !== "") validateConfirm();
});
document.getElementById("confirm").addEventListener("input", validateConfirm);

// Validation on submit
document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var results = [
        validateName(), validateEmail(), validatePhone(),
        validateAge(), validatePassword(), validateConfirm()
    ];
    var success = document.getElementById("success");
    if (results.every(Boolean)) {
        success.textContent = "Form submitted successfully!";
        this.reset();
    } else {
        success.textContent = "";
    }
});