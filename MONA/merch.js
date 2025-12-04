// SEARCH FILTER
const searchInput = document.querySelector(".right input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// BUY BUTTONS
const buyButtons = document.querySelectorAll(".card button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your interest! Purchasing system is not yet available.");
    });
});

// LOGOUT BUTTON
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    alert("You have been logged out.");
    // Example redirect:
    // window.location.href = "login.html";
});
