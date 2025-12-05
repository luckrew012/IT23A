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

                <div class="row-actions">
                    <span>₱${(item.qty * item.price).toFixed(2)}</span>

                    <!-- DELETE BUTTON (SVG icon) -->
                    <button class="delete-btn" onclick="deleteItem(${index})">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18" />
                            <path d="M8 6h8" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M5 6l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12" />
                            <rect x="8" y="3" width="8" height="3" rx="1" />
                        </svg>
                    </button>
                </div>

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

// Delete item
function deleteItem(i) {
    if (confirm("Remove this item from your reserved list?")) {
        reservedItems.splice(i, 1);
        save();
        loadItems();
        updateTotal();
    }
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

// CHECKOUT SYSTEM
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

    localStorage.setItem("checkoutItems", JSON.stringify(orderItems));
    window.location.href = "checkout.html";
});
