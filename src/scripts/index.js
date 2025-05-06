import "../styles/index.css";

const body = document.querySelector("body");

function createHeader() {
  const nav = document.createElement("nav");

  const navLeft = document.createElement("ul");
  navLeft.className = "nav-left";

  const li1 = document.createElement("li");
  const a1 = document.createElement("a");
  a1.href = "#";
  a1.className = "active";
  a1.textContent = "Главная";
  li1.appendChild(a1);

  const li2 = document.createElement("li");
  const a2 = document.createElement("a");
  a2.href = "#";
  a2.textContent = "О нас";
  li2.appendChild(a2);

  const li3 = document.createElement("li");
  const a3 = document.createElement("a");
  a3.href = "#";
  a3.textContent = "Меню";
  li3.appendChild(a3);

  const li4 = document.createElement("li");
  const a4 = document.createElement("a");
  a4.href = "#";
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
  logo.alt = "Blacklist Logo";
  logo.className = "logo";

  const brandText = document.createElement("div");
  brandText.className = "brand-text";

  const h1 = document.createElement("h1");
  h1.textContent = "ПОСИДИМ";
  const span = document.createElement("span");
  span.textContent = "чай, кофе и еда";

  brandText.appendChild(h1);
  brandText.appendChild(span);

  navRight.appendChild(logo);
  navRight.appendChild(brandText);

  nav.appendChild(navLeft);
  nav.appendChild(navRight);

  return nav;
}

const hero = document.createElement("div");
hero.className = "hero-section";
const header = createHeader();

hero.appendChild(header);
body.appendChild(hero);
