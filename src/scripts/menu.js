import "../styles/index.css";
import "../styles/menu.css";
import '../styles/basketModule.css';
import { initBasket } from './basketModule.js';
import { addItemToBasket, updateBasketItems } from './basketModule.js';  

function createHeader() {
  const nav = document.createElement("nav");

  const navLeft = document.createElement("ul");
  navLeft.className = "nav-left";

  const links = [
    { href: "index.html", text: "Home", active: true },
    { href: "about.html", text: "About" },
    { href: "menu.html", text: "Menu" },
    { href: "basket.html", text: "Basket" }
  ];

  links.forEach(({ href, text, active }) => {
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

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "-";

  const counter = document.createElement("span");
  counter.textContent = "0";

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+";

  btnWrap.appendChild(minusBtn);
  btnWrap.appendChild(counter);
  btnWrap.appendChild(plusBtn);
  info.appendChild(btnWrap);

  // Add "Add to cart" button
  const addButton = document.createElement("button");
  addButton.className = "add-to-cart-btn";
  addButton.textContent = "Add to cart";
  addButton.style.marginTop = "10px";
  addButton.addEventListener("click", () => {
    addButton.addEventListener("click", () => {
        const quantity = parseInt(counter.textContent, 10);
        if (quantity > 0) {
            const newItem = {
                name: title,
                quantity,
                image: src  // добавляем картинку для карточки в корзине
            };
    
            // Сначала проверяем, есть ли уже такой товар в корзине:
            const basket = JSON.parse(localStorage.getItem('basket')) || [];
            const existingItem = basket.find(item => item.name === newItem.name);
    
            if (existingItem) {
                existingItem.quantity += quantity;  // увеличиваем количество
            } else {
                basket.push(newItem);  // добавляем новый товар
            }
    
            localStorage.setItem('basket', JSON.stringify(basket));
    
            // Обновляем корзину визуально:
            updateBasketItems();
    
            // Сбрасываем счетчик обратно на 0 после добавления:
            counter.textContent = "0";
        }
    });
    
  });
  info.appendChild(addButton);

  const priceDiv = document.createElement("div");
  priceDiv.className = "menu-price";
  priceDiv.textContent = `${price} $`;
  info.appendChild(priceDiv);

  menuItem.appendChild(info);

  // Counter button logic
  plusBtn.addEventListener("click", () => {
    counter.textContent = String(parseInt(counter.textContent, 10) + 1);
  });

  minusBtn.addEventListener("click", () => {
    const current = parseInt(counter.textContent, 10);
    if (current > 0) {
      counter.textContent = String(current - 1);
    }
  });

  return menuItem;
}

const menuData = [
  // Drinks
  { src: "../assets/menu/drink1.jpg", alt: "Water", title: "Water", price: 3 },
  { src: "../assets/menu/drink2.jpg", alt: "Mint iced tea", title: "Mint iced tea", price: 4 },
  { src: "../assets/menu/drink3.jpg", alt: "Lemon iced tea", title: "Lemon iced tea", price: 4 },
  { src: "../assets/menu/drink4.jpg", alt: "Latte", title: "Latte", price: 5 },
  { src: "../assets/menu/drink5.jpg", alt: "Karak tea", title: "Karak tea", price: 7, isNew: true },
  { src: "../assets/menu/drink6.jpg", alt: "Mokka", title: "Mokka", price: 7, isNew: true },
  { src: "../assets/menu/drink7.jpg", alt: "Americano", title: "Americano", price: 4 },
  { src: "../assets/menu/drink8.jpg", alt: "Cappuccino", title: "Cappuccino", price: 5 },
  { src: "../assets/menu/drink9.jpg", alt: "Hot tea", title: "Hot tea", price: 4 },

  // Main
  { src: "../assets/menu/main1.jpg", alt: "Cheese soup", title: "Cheese soup", price: 9 },
  { src: "../assets/menu/main2.jpg", alt: "Beef salad", title: "Beef salad", price: 13 },
  { src: "../assets/menu/main3.jpg", alt: "Salmon salad", title: "Salmon salad", price: 13 },
  { src: "../assets/menu/main4jpg.webp", alt: "Cheese pasta", title: "Cheese pasta", price: 13 },
  { src: "../assets/menu/main5.jpg", alt: "Salmon pasta", title: "Salmon pasta", price: 13 },
  { src: "../assets/menu/main6.jpg..webp", alt: "Pelmeni with chicken", title: "Pelmeni with chicken", price: 13 },

  // Desserts
  { src: "../assets/menu/dess1.jpg", alt: "Chocolate ball", title: "Chocolate ball", price: 11 },
  { src: "../assets/menu/dess2.jpg", alt: "Strawberry cake", title: "Strawberry cake", price: 11 },
  { src: "../assets/menu/dess3.jpg", alt: "Blueberry cake", title: "Blueberry cake", price: 11 },
  { src: "../assets/menu/dess4.jpg", alt: "Strawberry eclair", title: "Strawberry eclair", price: 11 },
  { src: "../assets/menu/dess5.jpg", alt: "Blueberry eclair", title: "Blueberry eclair", price: 11 },
  { src: "../assets/menu/dess6.jpg", alt: "Brauni", title: "Brauni", price: 11 },
];

menuData.forEach(item => menu.appendChild(createMenuItem(item)));

container.appendChild(menu);
document.body.appendChild(container);
initBasket();
