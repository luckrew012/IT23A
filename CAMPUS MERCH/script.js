// PRODUCT LIST
const items = [
  { img: "nbsclogo.png", name: "NBSC UNIFORM MEN", price: "450 PHP" },
  { img: "img2.png", name: "IBM DEPARTMENT POLO SHIRT", price: "450 PHP" },
  { img: "img3.png", name: "ICS DEPARTMENT T-SHIRT", price: "450 PHP" },
  { img: "img4.png", name: "ITE DEPARTMENT POLO SHIRT", price: "450 PHP" },
  { img: "img5.png", name: "SLACKS FOR MEN", price: "450 PHP" },
  { img: "img6.png", name: "SLACKS FOR MEN", price: "450 PHP" },
  { img: "img7.png", name: "ROTC CAP", price: "100 PHP" },
  { img: "img8.png", name: "ID LACE", price: "80 PHP" },
  { img: "img9.png", name: "NBSC NSTP POLO", price: "450 PHP" },
  { img: "img10.png", name: "NBSC PE SHIRT", price: "350 PHP" },
  { img: "img11.png", name: "NBSC PE PANTS", price: "400 PHP" },
  { img: "img12.png", name: "NBSC JACKET", price: "650 PHP" },
  { img: "img13.png", name: "NBSC VARSITY JACKET", price: "750 PHP" },
  { img: "img14.png", name: "NBSC BLUE POLO", price: "450 PHP" },
  { img: "img15.png", name: "NBSC POLO", price: "450 PHP" },
  { img: "img16.png", name: "SLACKS FOR WOMEN", price: "450 PHP" }
];

const grid = document.getElementById("product-grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");

// LOAD ITEMS INTO GRID
items.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.price}</p>
  `;
  
  card.onclick = () => openModal(item);
  grid.appendChild(card);
});

// OPEN MODAL
function openModal(item) {
  modalImg.src = item.img;
  modalName.innerText = item.name;
  modalPrice.innerText = item.price;
  modal.style.display = "flex";
}

// CLOSE MODAL
document.querySelector(".close-btn").onclick = () => {
  modal.style.display = "none";
};

modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
