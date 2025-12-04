// Read URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const price = urlParams.get("price");
const img = urlParams.get("img");

// Insert into HTML
document.getElementById("product-name").textContent = name;
document.getElementById("product-img").src = img;
document.getElementById("product-price").textContent = price;
document.getElementById("total-price").textContent = price;
