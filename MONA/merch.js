// =========================
// SEARCH FILTER
// =========================
const searchInput = document.querySelector(".right input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        card.style.display = title.includes(value) ? "block" : "none";
    });
});


// =========================
// BUY BUTTONS (UPDATED)
// Opens product.html with item data
// =========================
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");

        const name = card.dataset.name;
        const price = card.dataset.price;
        const img = card.dataset.img;

        // Redirect to product details page
        window.location.href = `product.html?name=${encodeURIComponent(name)}&price=${price}&img=${img}`;
    });
});


// =========================
// LOGOUT BUTTON
// =========================
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    alert("You have been logged out.");
    // Optional redirect:
    // window.location.href = "login.html";
});
