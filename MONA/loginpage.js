// Login button
document.getElementById("loginBtn").addEventListener("click", function () {
    const studentID = document.getElementById("studentID").value;
    const password = document.getElementById("password").value;

    const savedID = localStorage.getItem("studentID");
    const savedPass = localStorage.getItem("password");

    if (!studentID || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (studentID === savedID && password === savedPass) {
        alert("Login successful!");
        window.location.href = "merch.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Sign In button -> redirect to Sign-Up page
document.getElementById("signupBtn").addEventListener("click", function () {
    window.location.href = "signup.html";
});
