function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username && password) {
    alert("Login successful!");
  } else {
    alert("Please fill in all fields.");
  }
}

function createAccount() {
  const username = document.getElementById('newUsername').value;
  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;

  if (username && email && password) {
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "index.html";
  } else {
    alert("Please complete all fields.");
  }
}
