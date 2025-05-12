
import "../styles/index.css";
import "../styles/menu.css";
import "../styles/basketModule.css";
import { initBasket } from "./basketModule.js";
import { updateBasketItems } from "./basketModule.js";


function createHeader() {
  const nav = document.createElement("nav");

  const navLeft = document.createElement("ul");
  navLeft.className = "nav-left";

  [
    { href: "index.html", text: "Home" },
    { href: "about.html", text: "About" },
    { href: "menu.html", text: "Menu", active: true },
    { href: "basket.html", text: "Basket" },
  ].forEach(({ href, text, active }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    if (active) a.className = "active";
    li.appendChild(a);
    navLeft.appendChild(li);
  });

  const navRight = document.createElement("div");
  navRight.className = "nav-right";

  const logo = document.createElement("img");
  logo.src = "../assets/images/logo.png";
  logo.alt = "Logo";
  logo.className = "logo";

  const brandText = document.createElement("div");
  brandText.className = "brand-text";
  brandText.innerHTML = "<h1>POSIDIM</h1><span>coffee, tea and food</span>";

  navRight.append(logo, brandText);
  nav.append(navLeft, navRight);
  return nav;
}
document.body.appendChild(createHeader());


const container = document.createElement("div");
container.className = "container";

const sidebarMenu = document.createElement("div");
sidebarMenu.className = "sidebar-menu";

[
  { text: "Menu",    className: "sidebar-item main-title" },
  { text: "All",     className: "sidebar-item" },
  { text: "Drinks",  className: "sidebar-item" },
  { text: "Main",    className: "sidebar-item" },
  { text: "Desserts",className: "sidebar-item" },
].forEach(({ text, className }) => {
  const item = document.createElement("div");
  item.className = className;
  item.textContent = text;
  sidebarMenu.appendChild(item);
});
container.appendChild(sidebarMenu);

const menu = document.createElement("div");
menu.className = "menu";


function createMenuItem({ src, alt, title, price, category, isNew = false }) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.dataset.category = category;

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  menuItem.appendChild(img);

  if (isNew) {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = "NEW";
    menuItem.appendChild(badge);
  }

  const info = document.createElement("div");
  info.className = "menu-info";

  const titleDiv = document.createElement("div");
  titleDiv.className = "menu-title";
  titleDiv.textContent = title;
  info.appendChild(titleDiv);

  const btnWrap = document.createElement("div");
  btnWrap.className = "menu-buttons";

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";
  const counter = document.createElement("span");
  counter.textContent = "0";
  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";

  btnWrap.append(minusBtn, counter, plusBtn);
  info.appendChild(btnWrap);

  const addButton = document.createElement("button");
  addButton.className = "add-to-cart-btn";
  addButton.textContent = "Add to cart";
  addButton.style.marginTop = "10px";
  addButton.addEventListener("click", () => {
    const quantity = +counter.textContent;
    if (!quantity) return;

    const item = { name: title, quantity, image: src };
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existing = basket.find((it) => it.name === item.name);
    existing ? (existing.quantity += quantity) : basket.push(item);
    localStorage.setItem("basket", JSON.stringify(basket));
    updateBasketItems();
    counter.textContent = "0";
  });
  info.appendChild(addButton);

  const priceDiv = document.createElement("div");
  priceDiv.className = "menu-price";
  priceDiv.textContent = `${price} $`;
  info.appendChild(priceDiv);

  menuItem.appendChild(info);

  plusBtn.addEventListener("click", () => (counter.textContent = +counter.textContent + 1));
  minusBtn.addEventListener("click", () => {
    if (+counter.textContent) counter.textContent = +counter.textContent - 1;
  });

  return menuItem;
}


const menuData = [
  // Drinks
  { src:"../assets/menu/drink1.jpg", alt:"Water", title:"Water", price:3, category:"drinks" },
  { src:"../assets/menu/drink2.jpg", alt:"Mint iced tea", title:"Mint iced tea", price:4, category:"drinks" },
  { src:"../assets/menu/drink3.jpg", alt:"Lemon iced tea", title:"Lemon iced tea", price:4, category:"drinks" },
  { src:"../assets/menu/drink4.jpg", alt:"Latte", title:"Latte", price:5, category:"drinks" },
  { src:"../assets/menu/drink5.jpg", alt:"Karak tea", title:"Karak tea", price:7, isNew:true, category:"drinks" },
  { src:"../assets/menu/drink6.jpg", alt:"Mokka", title:"Mokka", price:7, isNew:true, category:"drinks" },
  { src:"../assets/menu/drink7.jpg", alt:"Americano", title:"Americano", price:4, category:"drinks" },
  { src:"../assets/menu/drink8.jpg", alt:"Cappuccino", title:"Cappuccino", price:5, category:"drinks" },
  { src:"../assets/menu/drink9.jpg", alt:"Hot tea", title:"Hot tea", price:4, category:"drinks" },

  // Main
  { src:"../assets/menu/main1.jpg", alt:"Cheese soup", title:"Cheese soup", price:9, category:"main" },
  { src:"../assets/menu/main2.jpg", alt:"Beef salad", title:"Beef salad", price:13, category:"main" },
  { src:"../assets/menu/main3.jpg", alt:"Salmon salad", title:"Salmon salad", price:13, category:"main" },
  { src:"../assets/menu/main4jpg.webp", alt:"Cheese pasta", title:"Cheese pasta", price:13, category:"main" },
  { src:"../assets/menu/main5.jpg", alt:"Salmon pasta", title:"Salmon pasta", price:13, category:"main" },
  { src:"../assets/menu/main6.jpg..webp", alt:"Pelmeni with chicken", title:"Pelmeni with chicken", price:13, category:"main" },

  // Desserts
  { src:"../assets/menu/dess1.jpg", alt:"Chocolate ball", title:"Chocolate ball", price:11, category:"desserts" },
  { src:"../assets/menu/dess2.jpg", alt:"Strawberry cake", title:"Strawberry cake", price:11, category:"desserts" },
  { src:"../assets/menu/dess3.jpg", alt:"Blueberry cake", title:"Blueberry cake", price:11, category:"desserts" },
  { src:"../assets/menu/dess4.jpg", alt:"Strawberry eclair", title:"Strawberry eclair", price:11, category:"desserts" },
  { src:"../assets/menu/dess5.jpg", alt:"Blueberry eclair", title:"Blueberry eclair", price:11, category:"desserts" },
  { src:"../assets/menu/dess6.jpg", alt:"Brauni", title:"Brauni", price:11, category:"desserts" },
];


menuData.forEach((item) => menu.appendChild(createMenuItem(item)));
container.appendChild(menu);
document.body.appendChild(container);


const filterButtons = sidebarMenu.querySelectorAll(".sidebar-item:not(.main-title)");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.textContent.trim().toLowerCase(); // all / drinks / main / desserts

    document.querySelectorAll(".menu-item").forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;

      if (match) {
        card.style.display = "";
        requestAnimationFrame(() => {
          card.classList.remove("hidden");
          card.classList.add("animate-in");
        });
        setTimeout(() => card.classList.remove("animate-in"), 500);
      } else {
        card.classList.add("hidden");
        setTimeout(() => (card.style.display = "none"), 350);
      }
    });
  });
});

filterButtons[0].dispatchEvent(new Event("click"));


  // Basket init

initBasket();