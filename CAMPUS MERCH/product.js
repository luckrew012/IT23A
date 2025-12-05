// -------------------------------
// GET URL PARAMS
// -------------------------------
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const price = urlParams.get("price");
const img = urlParams.get("img");

// Insert into HTML
document.getElementById("product-name").textContent = name;
document.getElementById("product-img").src = img;
document.getElementById("product-price").textContent = price;
document.getElementById("total-price").textContent = price;


// -------------------------------
// UPDATE SIZE WHEN SELECTED
// -------------------------------
const sizeSelect = document.getElementById("size-select");
const productSizeText = document.getElementById("product-size");

sizeSelect.addEventListener("change", () => {
    productSizeText.textContent = "SIZE: " + sizeSelect.value;
});


// -------------------------------
// RESERVE BUTTON
// -------------------------------
document.querySelector(".reserve-btn").addEventListener("click", () => {

    let reservedItems = JSON.parse(localStorage.getItem("reservedItems")) || [];

    reservedItems.push({
        name: name,
        price: Number(price),
        img: img,
        size: sizeSelect.value,   // save size
        qty: 1
    });

    localStorage.setItem("reservedItems", JSON.stringify(reservedItems));

    window.location.href = "reserve.html";
});
