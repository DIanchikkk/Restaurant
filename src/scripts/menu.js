import "../styles/index.css";
import "../styles/menu.css";

function createHeader() {
  const nav = document.createElement("nav");

  const navLeft = document.createElement("ul");
  navLeft.className = "nav-left";

  const li1 = document.createElement("li");
  const a1 = document.createElement("a");
  a1.href = "index.html";
  a1.className = "active";
  a1.textContent = "Главная";
  li1.appendChild(a1);

  const li2 = document.createElement("li");
  const a2 = document.createElement("a");
  a2.href = "about.html";
  a2.textContent = "О нас";
  li2.appendChild(a2);

  const li3 = document.createElement("li");
  const a3 = document.createElement("a");
  a3.href = "menu.html";
  a3.textContent = "Меню";
  li3.appendChild(a3);

  const li4 = document.createElement("li");
  const a4 = document.createElement("a");
  a4.href = "basket.html";
  a4.textContent = "Корзина";
  li4.appendChild(a4);

  navLeft.appendChild(li1);
  navLeft.appendChild(li2);
  navLeft.appendChild(li3);
  navLeft.appendChild(li4);

  const navRight = document.createElement("div");
  navRight.className = "nav-right";

  const logo = document.createElement("img");
  logo.src = "../assets/images/logo.png";
  logo.alt = "Logo";
  logo.className = "logo";

  const brandText = document.createElement("div");
  brandText.className = "brand-text";
  brandText.innerHTML = "<h1>ПОСИДИМ</h1><span>чай, кофе и еда</span>";

  navRight.append(logo, brandText);
  nav.append(navLeft, navRight);
  return nav;
}

document.querySelector("body").append(createHeader());

const container = document.createElement("div");
container.className = "container";

const sidebarMenu = document.createElement("div");
sidebarMenu.className = "sidebar-menu";

[
  { text: "Menu", className: "sidebar-item main-title" },
  { text: "All", className: "sidebar-item" },
  { text: "Drinks", className: "sidebar-item" },
  { text: "Main", className: "sidebar-item" },
  { text: "Desserts", className: "sidebar-item" },
].forEach(({ text, className }) => {
  const item = document.createElement("div");
  item.className = className;
  item.textContent = text;
  sidebarMenu.appendChild(item);
});

container.appendChild(sidebarMenu);

const menu = document.createElement("div");
menu.className = "menu";

function createMenuItem({ src, alt, title, price, isNew = false }) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  if (isNew) menuItem.classList.add("new");

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

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";
  const counter = document.createElement("span");
  counter.textContent = "0";
  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";

  btnWrap.appendChild(plusBtn);
  btnWrap.appendChild(counter);
  btnWrap.appendChild(minusBtn);

  info.appendChild(btnWrap);

  const priceDiv = document.createElement("div");
  priceDiv.className = "menu-price";
  priceDiv.textContent = `${price} $`;
  info.appendChild(priceDiv);

  menuItem.appendChild(info);

  return menuItem;
}

const menuData = [
  // Drinks
  { src: "../assets/menu/drink1.jpg", alt: "Water", title: "Water", price: 3 },
  {
    src: "../assets/menu/drink2.jpg",
    alt: "Mint iced tea",
    title: "Mint iced tea",
    price: 4,
  },
  {
    src: "../assets/menu/drink3.jpg",
    alt: "Lemon iced tea",
    title: "Lemon iced tea",
    price: 4,
  },
  { src: "../assets/menu/drink4.jpg", alt: "Latte", title: "Latte", price: 5 },
  {
    src: "../assets/menu/drink5.jpg",
    alt: "Karak tea",
    title: "Karak tea",
    price: 7,
    isNew: true,
  },
  {
    src: "../assets/menu/drink6.jpg",
    alt: "Mokka",
    title: "Mokka",
    price: 7,
    isNew: true,
  },
  {
    src: "../assets/menu/drink7.jpg",
    alt: "Americano",
    title: "Americano",
    price: 4,
  },
  {
    src: "../assets/menu/drink8.jpg",
    alt: "Cappuccino",
    title: "Cappuccino",
    price: 5,
  },
  {
    src: "../assets/menu/drink9.jpg",
    alt: "Hot tea",
    title: "Hot tea",
    price: 4,
  },

  // Main
  {
    src: "../assets/menu/main1.jpg",
    alt: "Cheese soup",
    title: "Cheese soup",
    price: 9,
  },
  {
    src: "../assets/menu/main2.jpg",
    alt: "Beef salad",
    title: "Beef salad",
    price: 13,
  },
  {
    src: "../assets/menu/main3.jpg",
    alt: "Salmon salad",
    title: "Salmon salad",
    price: 13,
  },
  {
    src: "../assets/menu/main4jpg.webp",
    alt: "Cheese pasta",
    title: "Cheese pasta",
    price: 13,
  },
  {
    src: "../assets/menu/main5.jpg",
    alt: "Salmon pasta",
    title: "Salmon pasta",
    price: 13,
  },
  {
    src: "../assets/menu/main6.jpg..webp",
    alt: "Pelmeni with chicken",
    title: "Pelmeni with chicken",
    price: 13,
  },

  // Desserts
  {
    src: "../assets/menu/dess1.jpg",
    alt: "Chocolate ball",
    title: "Chocolate ball",
    price: 11,
  },
  {
    src: "../assets/menu/dess2.jpg",
    alt: "Strawberry cake",
    title: "Strawberry cake",
    price: 11,
  },
  {
    src: "../assets/menu/dess3.jpg",
    alt: "Blueberry cake",
    title: "Blueberry cake",
    price: 11,
  },
  {
    src: "../assets/menu/dess4.jpg",
    alt: "Strawberry eclair",
    title: "Strawberry eclair",
    price: 11,
  },
  {
    src: "../assets/menu/dess5.jpg",
    alt: "Blueberry eclair",
    title: "Blueberry eclair",
    price: 11,
  },
  {
    src: "../assets/menu/dess6.jpg",
    alt: "Brauni",
    title: "Brauni",
    price: 11,
  },
];

menuData.forEach((item) => menu.appendChild(createMenuItem(item)));

container.appendChild(menu);

document.body.appendChild(container);
