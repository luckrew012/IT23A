// Load reserved items
let reservedItems = JSON.parse(localStorage.getItem("reservedItems")) || [];
const list = document.getElementById("reservedList");
const totalDisplay = document.getElementById("totalDisplay");

// Display items
function loadItems() {
    list.innerHTML = "";
    reservedItems.forEach((item, index) => {
        list.innerHTML += `
            <div class="item-row">
                <div class="item-info">
                    <input type="checkbox" class="item-check" data-index="${index}">
                    <img src="${item.img}">
                    <span>${item.name}</span>
                </div>

                <div>₱${Number(item.price).toFixed(2)}</div>

                <div class="qty-controls">
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>

                <div>₱${(item.qty * item.price).toFixed(2)}</div>
            </div>
        `;
    });
}
loadItems();

// Change quantity
function changeQty(i, amount) {
    reservedItems[i].qty += amount;
    if (reservedItems[i].qty < 1) reservedItems[i].qty = 1;

    save();
    loadItems();
    updateTotal();
}

// Update totals
function updateTotal() {
    const checkboxes = document.querySelectorAll(".item-check");
    let total = 0;
    let count = 0;

    checkboxes.forEach((box, i) => {
        if (box.checked) {
            total += reservedItems[i].qty * reservedItems[i].price;
            count++;
        }
    });

    totalDisplay.innerText = `Total (${count} items): ₱${total.toFixed(2)}`;
}

// Save to localStorage
function save() {
    localStorage.setItem("reservedItems", JSON.stringify(reservedItems));
}

// Detect checkbox changes
document.addEventListener("input", e => {
    if (e.target.classList.contains("item-check")) {
        updateTotal();
    }
});

// SEARCH filter
document.getElementById("search").addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    document.querySelectorAll(".item-row").forEach(row => {
        const name = row.querySelector(".item-info span").innerText.toLowerCase();
        row.style.display = name.includes(value) ? "grid" : "none";
    });
});

// ===============================
// CHECKOUT SYSTEM
// ===============================
document.getElementById("checkoutBtn").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".item-check");
    let orderItems = [];

    checkboxes.forEach((box, i) => {
        if (box.checked) {
            orderItems.push(reservedItems[i]);
        }
    });

    if (orderItems.length === 0) {
        alert("Please select at least one item to checkout.");
        return;
    }

    // Save selected items for checkout page
    localStorage.setItem("checkoutItems", JSON.stringify(orderItems));

    // Redirect to checkout.html
    window.location.href = "checkout.html";
});
