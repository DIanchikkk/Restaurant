import "../styles/index.css";

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

  const logo = document.createElement("img");
  logo.src = "../assets/images/logo.png";
  logo.alt = "Logo";
  logo.className = "logo";

  const brandText = document.createElement("div");
  brandText.className = "brand-text";
  brandText.innerHTML = "<h1>ПОСИДИМ</h1><span>coffee, tea and food</span>";

  navRight.append(logo, brandText);
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

       // ✅ создаем фиксированный кружок
       const circleButton = document.createElement('a');
       circleButton.href = 'basket.html';  // куда ведет кружок
       circleButton.className = 'circle-button';
       circleButton.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
           <path d="M7 4v2h1l3.6 7.59-1.35 2.44c-.17.31-.25.65-.25 1 0 1.1.9 2 2 2h9v-2h-8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h5.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1h-14zm0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
       </svg>
       `;
       
       document.body.appendChild(circleButton);
   

  // slider

  const images = [
    "../assets/images/imgHero1.jpg",
    "../assets/images/imgHero2.jpg",
    "../assets/images/imgHero3.jpg",
  ];

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

createHero()