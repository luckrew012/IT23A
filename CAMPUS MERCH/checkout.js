let items = JSON.parse(localStorage.getItem("checkoutItems")) || [];

const orderList = document.getElementById("orderList");
const grandTotal = document.getElementById("grandTotal");

// Load items
function loadItems() {
    let total = 0;
    orderList.innerHTML = "";

    items.forEach(item => {
        total += item.qty * item.price;

        orderList.innerHTML += `
            <div class="order-item">
                <div><img src="${item.img}" width="60"> ${item.name}</div>
                <div>₱${item.price}</div>
                <div>${item.qty}</div>
                <div>₱${(item.qty * item.price).toFixed(2)}</div>
            </div>
        `;
    });

    grandTotal.innerText = total.toFixed(2);
}

loadItems();

// Edit user info
document.getElementById("editBtn").addEventListener("click", () => {
    let newName = prompt("Enter Name:", document.getElementById("userName").innerText);
    let newPhone = prompt("Enter Contact Number:", document.getElementById("userPhone").innerText);
    let newEmail = prompt("Enter Email:", document.getElementById("userEmail").innerText);

    if (newName) document.getElementById("userName").innerText = newName;
    if (newPhone) document.getElementById("userPhone").innerText = newPhone;
    if (newEmail) document.getElementById("userEmail").innerText = newEmail;
});

// Place Order → Pop-up Receipt
document.getElementById("placeOrderBtn").addEventListener("click", () => {
    let receipt = "NBSC CAMPUS MERCH\n\n";
    
    items.forEach(item => {
        receipt += `${item.name}\nUnit Price: ₱${item.price}\nQty: ${item.qty}\nTotal: ₱${(item.price * item.qty).toFixed(2)}\n\n`;
    });

    receipt += `GRAND TOTAL: ₱${grandTotal.innerText}\n\n`;
    receipt += "Show this receipt at the NBSC CAMPUS MERCH .";

    alert(receipt);
});
