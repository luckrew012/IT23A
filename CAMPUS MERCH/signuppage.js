document.getElementById("signupBtn").addEventListener("click", function () {
    const studentID = document.getElementById("studentID").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!studentID || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save credentials in localStorage
    localStorage.setItem("studentID", studentID);
    localStorage.setItem("password", password);

    alert("Account created successfully!");
    window.location.href = "loginpage.html";
});

document.getElementById("toLoginBtn").addEventListener("click", function () {
    window.location.href = "loginpage.html";
});
