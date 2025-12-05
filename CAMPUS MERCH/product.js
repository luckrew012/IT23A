// -------------------------------------
// GET URL PARAMETERS
// -------------------------------------
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const price = Number(urlParams.get("price"));
const img = urlParams.get("img");

// Insert data into screen
document.getElementById("product-name").textContent = name;
document.getElementById("product-img").src = img;
document.getElementById("product-price").textContent = price;
document.getElementById("total-price").textContent = price;

// -------------------------------------
// SIZE SELECTION
// -------------------------------------
const sizeSelect = document.getElementById("size-select");
const productSizeText = document.getElementById("product-size");

sizeSelect.addEventListener("change", () => {
    productSizeText.textContent = "SIZE: " + sizeSelect.value;
});

// -------------------------------------
// QUANTITY UPDATE
// -------------------------------------
const qtyInput = document.getElementById("qty");
const totalItem = document.getElementById("total-item");
const totalAmount = document.getElementById("total-price");

qtyInput.addEventListener("input", () => {
    let qty = parseInt(qtyInput.value);
    if (qty < 1) qty = 1;

    qtyInput.value = qty;
    totalItem.textContent = `Total item: ${qty}pc`;
    totalAmount.textContent = price * qty;
});

// -------------------------------------
// BUY BUTTON → CHECKOUT PAGE
// -------------------------------------
document.querySelector(".buy-btn").addEventListener("click", () => {

    let order = {
        name: name,
        price: price,
        img: img,
        size: sizeSelect.value,
        qty: Number(qtyInput.value),
        total: price * Number(qtyInput.value)
    };

    // Save temporarily
    localStorage.setItem("checkoutItem", JSON.stringify(order));

    // Go to checkout
    window.location.href = "checkout.html";
});

// -------------------------------------
// RESERVE BUTTON
// -------------------------------------
document.querySelector(".reserve-btn").addEventListener("click", () => {

    let reservedItems = JSON.parse(localStorage.getItem("reservedItems")) || [];

    reservedItems.push({
        name: name,
        price: price,
        img: img,
        size: sizeSelect.value,
        qty: Number(qtyInput.value)
    });

    localStorage.setItem("reservedItems", JSON.stringify(reservedItems));

    window.location.href = "reserve.html";
});
