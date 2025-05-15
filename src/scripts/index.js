import "../styles/index.css";
import '../styles/basketModule.css';
import { initBasket } from "./basketModule.js";

import imgHero1 from '../assets/images/imgHero1.jpg';
import imgHero2 from '../assets/images/imgHero2.jpg';
import imgHero3 from '../assets/images/imgHero3.jpg';
import imgHero4 from '../assets/images/imgHero4.jpg';
import imgHero5 from '../assets/images/imgHero5.jpg';
import logo from '../assets/images/logo1.png';


const body = document.querySelector("body");

function createHeader() {
  const nav = document.createElement("nav");

  const navLeft = document.createElement("ul");
  navLeft.className = "nav-left";

  const li1 = document.createElement("li");
  const a1 = document.createElement("a");
  a1.href = "index.html";
  a1.className = "active";
  a1.textContent = "Home";
  li1.appendChild(a1);

  const li2 = document.createElement("li");
  const a2 = document.createElement("a");
  a2.href = "about.html";
  a2.textContent = "About";
  li2.appendChild(a2);

  const li3 = document.createElement("li");
  const a3 = document.createElement("a");
  a3.href = "menu.html";
  a3.textContent = "Menu";
  li3.appendChild(a3);

  const li4 = document.createElement("li");
  const a4 = document.createElement("a");
  a4.href = "basket.html";
  a4.textContent = "Basket";
  li4.appendChild(a4);

  navLeft.appendChild(li1);
  navLeft.appendChild(li2);
  navLeft.appendChild(li3);
  navLeft.appendChild(li4);

  const navRight = document.createElement("div");
  navRight.className = "nav-right";

  const logoImg = document.createElement("img");
  logoImg.src = logo; 
  logoImg.alt = "Logo";
  logoImg.className = "logo";
  

  const brandText = document.createElement("div");
  brandText.className = "brand-text";
  brandText.innerHTML = "<h1>POSIDIM</h1><span>coffee, tea and food</span>";

  navRight.append(logoImg, brandText);
  nav.append(navLeft, navRight);
  return nav;
}

function createHero() {
  const hero = document.createElement("div");
  hero.className = "hero-section";

  const bgA = document.createElement("div");
  const bgB = document.createElement("div");
  bgA.className = bgB.className = "hero-bg";
  hero.append(bgA, bgB);

  const leftArrow = document.createElement("button");
  const rightArrow = document.createElement("button");
  leftArrow.className = "arrow arrow-left";
  rightArrow.className = "arrow arrow-right";
  leftArrow.innerHTML = "&#10094;";
  rightArrow.innerHTML = "&#10095;";
  hero.append(leftArrow, rightArrow);

  hero.appendChild(createHeader());
  body.appendChild(hero);

  // slider

  const images = [imgHero1, imgHero2, imgHero3, imgHero4, imgHero5];


  let current = 0;
  let topBg = bgA;
  const INTERVAL = 5000;
  let timer;

  // начальная картинка
  bgA.style.backgroundImage = `url(${images[0]})`;
  bgA.style.opacity = 1;

  // плавная смена слоёв
  function fadeTo(idx) {
    const nextBg = topBg === bgA ? bgB : bgA;
    nextBg.style.backgroundImage = `url(${images[idx]})`;
    nextBg.style.opacity = 0;

    requestAnimationFrame(() => {
      nextBg.style.opacity = 1;
      topBg.style.opacity = 0;
      topBg = nextBg;
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    console.log(current);

    fadeTo(current);
  }
  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    fadeTo(current);
  }

  // автопрокрутка
  function startAuto() {
    timer = setInterval(nextSlide, INTERVAL);
  }
  function stopAuto() {
    clearInterval(timer);
  }
  startAuto();

  // обработчики
  leftArrow.addEventListener("click", () => {
    stopAuto();
    prevSlide();
    startAuto();
  });
  rightArrow.addEventListener("click", () => {
    stopAuto();
    nextSlide();
    startAuto();
  });
}
initBasket()
createHero()