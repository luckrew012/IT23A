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
// RESERVE BUTTON FUNCTIONALITY
// -------------------------------
document.querySelector(".reserve-btn").addEventListener("click", () => {

    let reservedItems = JSON.parse(localStorage.getItem("reservedItems")) || [];

    reservedItems.push({
        name: name,
        price: Number(price),
        img: img,
        qty: 1
    });

    localStorage.setItem("reservedItems", JSON.stringify(reservedItems));

    // Redirect to reserve page
    window.location.href = "reserve.html";
});