/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/basketModule.js":
/*!*************************************!*\
  !*** ./src/scripts/basketModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItemToBasket: () => (/* binding */ addItemToBasket),\n/* harmony export */   createBasketButton: () => (/* binding */ createBasketButton),\n/* harmony export */   createBasketPopup: () => (/* binding */ createBasketPopup),\n/* harmony export */   initBasket: () => (/* binding */ initBasket),\n/* harmony export */   registerBasketContainer: () => (/* binding */ registerBasketContainer),\n/* harmony export */   updateAllBasketItems: () => (/* binding */ updateAllBasketItems),\n/* harmony export */   updateBasketItems: () => (/* binding */ updateBasketItems)\n/* harmony export */ });\nconst basketContainers = [];  // 🔥 Новый массив для хранения всех контейнеров\n\n// Функция для регистрации контейнеров (можно вызывать из basket.js)\nfunction registerBasketContainer(container) {\n    if (container && !basketContainers.includes(container)) {\n        basketContainers.push(container);\n    }\n}\n\n// Функция для массового обновления всех контейнеров\nfunction updateAllBasketItems() {\n    basketContainers.forEach(container => {\n        updateBasketItems(container);\n    });\n}\n\n// Функция для создания кнопки корзины\nfunction createBasketButton() {\n    const circleButton = document.createElement('a');\n    circleButton.href = '#';\n    circleButton.className = 'circle-button';\n    circleButton.innerHTML = `\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path d=\"M7 4v2h1l3.6 7.59-1.35 2.44c-.17.31-.25.65-.25 1 0 1.1.9 2 2 2h9v-2h-8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h5.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1h-14zm0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/>\n        </svg>\n    `;\n    document.body.appendChild(circleButton);\n    return circleButton;\n}\n\n// Функция для создания попапа корзины\nfunction createBasketPopup() {\n    const basketPopup = document.createElement('div');\n    basketPopup.className = 'basket-popup'; // по умолчанию скрыт (CSS делает это)\n    basketPopup.innerHTML = `\n    <div class=\"basket-content\">\n        <h2>Your cart</h2>\n        <div class=\"basket-items\"></div>\n        <div class=\"basket-footer-buttons\">\n            <button class=\"close-basket\">Close</button>\n            <button class=\"order-all-basket\">Order All</button>\n        </div>\n    </div>\n`;\n    document.body.appendChild(basketPopup);\n\n    // 🔥 Регистрируем внутренний контейнер корзины\n    const basketItemsContainer = basketPopup.querySelector('.basket-items');\n    registerBasketContainer(basketItemsContainer);\n\n    return basketPopup;\n}\n\n// Обновление корзины с поддержкой кастомного контейнера\nfunction updateBasketItems(container = null) {\n    const targetContainer = container || document.querySelector('.basket-items');\n    const items = JSON.parse(localStorage.getItem('basket')) || [];\n\n    if (items.length === 0) {\n        targetContainer.innerHTML = '<p>Your cart is empty</p>';\n    } else {\n        targetContainer.innerHTML = '';\n        items.forEach((item, index) => {\n            const card = document.createElement('div');\n            card.className = 'basket-item-card';\n\n            const img = document.createElement('img');\n            img.src = item.image || 'https://via.placeholder.com/60';\n            img.alt = item.name;\n\n            const details = document.createElement('div');\n            details.className = 'basket-item-details';\n\n            const name = document.createElement('p');\n            name.textContent = item.name;\n\n            const qtyWrap = document.createElement('div');\n            qtyWrap.className = 'quantity-controls';\n\n            const minusBtn = document.createElement('button');\n            minusBtn.textContent = '-';\n            minusBtn.addEventListener('click', () => {\n                if (item.quantity > 1) {\n                    item.quantity--;\n                } else {\n                    items.splice(index, 1);\n                }\n                localStorage.setItem('basket', JSON.stringify(items));\n                updateAllBasketItems(); // ✅ Обновляем все корзины\n            });\n\n            const qtyText = document.createElement('span');\n            qtyText.textContent = `${item.quantity}`;\n\n            const plusBtn = document.createElement('button');\n            plusBtn.textContent = '+';\n            plusBtn.addEventListener('click', () => {\n                item.quantity++;\n                localStorage.setItem('basket', JSON.stringify(items));\n                updateAllBasketItems(); // ✅ Обновляем все корзины\n            });\n\n            qtyWrap.appendChild(minusBtn);\n            qtyWrap.appendChild(qtyText);\n            qtyWrap.appendChild(plusBtn);\n\n            details.appendChild(name);\n            details.appendChild(qtyWrap);\n\n            // Кнопки \"Order\" и \"Delete\"\n            const buttonsWrap = document.createElement('div');\n            buttonsWrap.className = 'basket-action-buttons';\n\n            const orderBtn = document.createElement('button');\n            orderBtn.textContent = 'Order';\n            orderBtn.className = 'order-btn';\n            orderBtn.addEventListener('click', () => {\n                alert(`Order placed for: ${item.name} (${item.quantity})`);\n            });\n\n            const deleteBtn = document.createElement('button');\n            deleteBtn.textContent = 'Delete';\n            deleteBtn.className = 'delete-btn';\n            deleteBtn.addEventListener('click', () => {\n                items.splice(index, 1);\n                localStorage.setItem('basket', JSON.stringify(items));\n                updateAllBasketItems(); // ✅ Обновляем все корзины\n            });\n\n            buttonsWrap.appendChild(orderBtn);\n            buttonsWrap.appendChild(deleteBtn);\n\n            card.appendChild(img);\n            card.appendChild(details);\n            card.appendChild(buttonsWrap);\n\n            targetContainer.appendChild(card);\n        });\n    }\n}\n\n// Функция для добавления товара в корзину\nfunction addItemToBasket(item) {\n    const basket = JSON.parse(localStorage.getItem('basket')) || [];\n    basket.push(item);\n    localStorage.setItem('basket', JSON.stringify(basket));\n    updateAllBasketItems();  // ✅ Обновляем все корзины при добавлении нового товара\n}\n\n// Новая функция initBasket для инициализации корзины\nfunction initBasket() {\n    const basketButton = createBasketButton();   // Создаем кнопку корзины\n    const basketPopup = createBasketPopup();     // Создаем попап корзины\n\n    // ✅ Зарегистрировать контейнер главной корзины, если нужен ещё один (например, страница)\n    const mainContainer = document.querySelector('.basket-items');\n    if (mainContainer) {\n        registerBasketContainer(mainContainer);\n    }\n\n    updateAllBasketItems();                      // Обновляем содержимое всех корзин\n\n    // Открытие попапа при клике на кнопку корзины\n    basketButton.addEventListener('click', (e) => {\n        e.preventDefault();\n        basketPopup.classList.toggle('active'); // Переключаем видимость\n    });\n\n    // Закрытие попапа при клике на \"Close\"\n    const closeBtn = basketPopup.querySelector('.close-basket');\n    closeBtn.addEventListener('click', () => {\n        basketPopup.classList.remove('active');\n    });\n\n    // Обработчик кнопки \"Order All\"\n    const orderAllBtn = basketPopup.querySelector('.order-all-basket');\n    orderAllBtn.addEventListener('click', () => {\n        const basket = JSON.parse(localStorage.getItem('basket')) || [];\n\n        if (basket.length === 0) {\n            alert('Your cart is empty!');\n            return;\n        }\n\n        // Сформируем сообщение о заказе\n        const summary = basket.map(item => `${item.name} x${item.quantity}`).join('\\n');\n        alert(`Order placed for:\\n${summary}`);\n\n        // Очистка корзины после оформления\n        localStorage.removeItem('basket');\n        updateAllBasketItems(); // ✅ Обновляем все корзины\n        basketPopup.classList.remove('active');\n    });\n}\n\n\n//# sourceURL=webpack://restaurant/./src/scripts/basketModule.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/menu.css */ \"./src/styles/menu.css\");\n/* harmony import */ var _styles_basketModule_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/basketModule.css */ \"./src/styles/basketModule.css\");\n/* harmony import */ var _basketModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basketModule.js */ \"./src/scripts/basketModule.js\");\n\n\n\n\n\n\n\n\nfunction createHeader() {\n  const nav = document.createElement(\"nav\");\n\n  const navLeft = document.createElement(\"ul\");\n  navLeft.className = \"nav-left\";\n\n  [\n    { href: \"index.html\", text: \"Home\" },\n    { href: \"about.html\", text: \"About\" },\n    { href: \"menu.html\", text: \"Menu\", active: true },\n    { href: \"basket.html\", text: \"Basket\" },\n  ].forEach(({ href, text, active }) => {\n    const li = document.createElement(\"li\");\n    const a = document.createElement(\"a\");\n    a.href = href;\n    a.textContent = text;\n    if (active) a.className = \"active\";\n    li.appendChild(a);\n    navLeft.appendChild(li);\n  });\n\n  const navRight = document.createElement(\"div\");\n  navRight.className = \"nav-right\";\n\n  const logo = document.createElement(\"img\");\n  logo.src = \"../assets/images/logo.png\";\n  logo.alt = \"Logo\";\n  logo.className = \"logo\";\n\n  const brandText = document.createElement(\"div\");\n  brandText.className = \"brand-text\";\n  brandText.innerHTML = \"<h1>POSIDIM</h1><span>coffee, tea and food</span>\";\n\n  navRight.append(logo, brandText);\n  nav.append(navLeft, navRight);\n  return nav;\n}\ndocument.body.appendChild(createHeader());\n\n\nconst container = document.createElement(\"div\");\ncontainer.className = \"container\";\n\nconst sidebarMenu = document.createElement(\"div\");\nsidebarMenu.className = \"sidebar-menu\";\n\n[\n  { text: \"Menu\",    className: \"sidebar-item main-title\" },\n  { text: \"All\",     className: \"sidebar-item\" },\n  { text: \"Drinks\",  className: \"sidebar-item\" },\n  { text: \"Main\",    className: \"sidebar-item\" },\n  { text: \"Desserts\",className: \"sidebar-item\" },\n].forEach(({ text, className }) => {\n  const item = document.createElement(\"div\");\n  item.className = className;\n  item.textContent = text;\n  sidebarMenu.appendChild(item);\n});\ncontainer.appendChild(sidebarMenu);\n\nconst menu = document.createElement(\"div\");\nmenu.className = \"menu\";\n\n\nfunction createMenuItem({ src, alt, title, price, category, isNew = false }) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.className = \"menu-item\";\n  menuItem.dataset.category = category;\n\n  const img = document.createElement(\"img\");\n  img.src = src;\n  img.alt = alt;\n  menuItem.appendChild(img);\n\n  if (isNew) {\n    const badge = document.createElement(\"div\");\n    badge.className = \"badge\";\n    badge.textContent = \"NEW\";\n    menuItem.appendChild(badge);\n  }\n\n  const info = document.createElement(\"div\");\n  info.className = \"menu-info\";\n\n  const titleDiv = document.createElement(\"div\");\n  titleDiv.className = \"menu-title\";\n  titleDiv.textContent = title;\n  info.appendChild(titleDiv);\n\n  const btnWrap = document.createElement(\"div\");\n  btnWrap.className = \"menu-buttons\";\n\n  const minusBtn = document.createElement(\"button\");\n  minusBtn.textContent = \"-\";\n  const counter = document.createElement(\"span\");\n  counter.textContent = \"0\";\n  const plusBtn = document.createElement(\"button\");\n  plusBtn.textContent = \"+\";\n\n  btnWrap.append(minusBtn, counter, plusBtn);\n  info.appendChild(btnWrap);\n\n  const addButton = document.createElement(\"button\");\n  addButton.className = \"add-to-cart-btn\";\n  addButton.textContent = \"Add to cart\";\n  addButton.style.marginTop = \"10px\";\n  addButton.addEventListener(\"click\", () => {\n    const quantity = +counter.textContent;\n    if (!quantity) return;\n\n    const item = { name: title, quantity, image: src };\n    const basket = JSON.parse(localStorage.getItem(\"basket\")) || [];\n    const existing = basket.find((it) => it.name === item.name);\n    existing ? (existing.quantity += quantity) : basket.push(item);\n    localStorage.setItem(\"basket\", JSON.stringify(basket));\n    (0,_basketModule_js__WEBPACK_IMPORTED_MODULE_3__.updateBasketItems)();\n    counter.textContent = \"0\";\n  });\n  info.appendChild(addButton);\n\n  const priceDiv = document.createElement(\"div\");\n  priceDiv.className = \"menu-price\";\n  priceDiv.textContent = `${price} $`;\n  info.appendChild(priceDiv);\n\n  menuItem.appendChild(info);\n\n  plusBtn.addEventListener(\"click\", () => (counter.textContent = +counter.textContent + 1));\n  minusBtn.addEventListener(\"click\", () => {\n    if (+counter.textContent) counter.textContent = +counter.textContent - 1;\n  });\n\n  return menuItem;\n}\n\n\nconst menuData = [\n  // Drinks\n  { src:\"../assets/menu/drink1.jpg\", alt:\"Water\", title:\"Water\", price:3, category:\"drinks\" },\n  { src:\"../assets/menu/drink2.jpg\", alt:\"Mint iced tea\", title:\"Mint iced tea\", price:4, category:\"drinks\" },\n  { src:\"../assets/menu/drink3.jpg\", alt:\"Lemon iced tea\", title:\"Lemon iced tea\", price:4, category:\"drinks\" },\n  { src:\"../assets/menu/drink4.jpg\", alt:\"Latte\", title:\"Latte\", price:5, category:\"drinks\" },\n  { src:\"../assets/menu/drink5.jpg\", alt:\"Karak tea\", title:\"Karak tea\", price:7, isNew:true, category:\"drinks\" },\n  { src:\"../assets/menu/drink6.jpg\", alt:\"Mokka\", title:\"Mokka\", price:7, isNew:true, category:\"drinks\" },\n  { src:\"../assets/menu/drink7.jpg\", alt:\"Americano\", title:\"Americano\", price:4, category:\"drinks\" },\n  { src:\"../assets/menu/drink8.jpg\", alt:\"Cappuccino\", title:\"Cappuccino\", price:5, category:\"drinks\" },\n  { src:\"../assets/menu/drink9.jpg\", alt:\"Hot tea\", title:\"Hot tea\", price:4, category:\"drinks\" },\n\n  // Main\n  { src:\"../assets/menu/main1.jpg\", alt:\"Cheese soup\", title:\"Cheese soup\", price:9, category:\"main\" },\n  { src:\"../assets/menu/main2.jpg\", alt:\"Beef salad\", title:\"Beef salad\", price:13, category:\"main\" },\n  { src:\"../assets/menu/main3.jpg\", alt:\"Salmon salad\", title:\"Salmon salad\", price:13, category:\"main\" },\n  { src:\"../assets/menu/main4jpg.webp\", alt:\"Cheese pasta\", title:\"Cheese pasta\", price:13, category:\"main\" },\n  { src:\"../assets/menu/main5.jpg\", alt:\"Salmon pasta\", title:\"Salmon pasta\", price:13, category:\"main\" },\n  { src:\"../assets/menu/main6.jpg..webp\", alt:\"Pelmeni with chicken\", title:\"Pelmeni with chicken\", price:13, category:\"main\" },\n\n  // Desserts\n  { src:\"../assets/menu/dess1.jpg\", alt:\"Chocolate ball\", title:\"Chocolate ball\", price:11, category:\"desserts\" },\n  { src:\"../assets/menu/dess2.jpg\", alt:\"Strawberry cake\", title:\"Strawberry cake\", price:11, category:\"desserts\" },\n  { src:\"../assets/menu/dess3.jpg\", alt:\"Blueberry cake\", title:\"Blueberry cake\", price:11, category:\"desserts\" },\n  { src:\"../assets/menu/dess4.jpg\", alt:\"Strawberry eclair\", title:\"Strawberry eclair\", price:11, category:\"desserts\" },\n  { src:\"../assets/menu/dess5.jpg\", alt:\"Blueberry eclair\", title:\"Blueberry eclair\", price:11, category:\"desserts\" },\n  { src:\"../assets/menu/dess6.jpg\", alt:\"Brauni\", title:\"Brauni\", price:11, category:\"desserts\" },\n];\n\n\nmenuData.forEach((item) => menu.appendChild(createMenuItem(item)));\ncontainer.appendChild(menu);\ndocument.body.appendChild(container);\n\n\nconst filterButtons = sidebarMenu.querySelectorAll(\".sidebar-item:not(.main-title)\");\n\nfilterButtons.forEach((btn) => {\n  btn.addEventListener(\"click\", () => {\n    \n    filterButtons.forEach((b) => b.classList.remove(\"active\"));\n    btn.classList.add(\"active\");\n\n    const filter = btn.textContent.trim().toLowerCase(); // all / drinks / main / desserts\n\n    document.querySelectorAll(\".menu-item\").forEach((card) => {\n      const match = filter === \"all\" || card.dataset.category === filter;\n\n      if (match) {\n        card.style.display = \"\";\n        requestAnimationFrame(() => {\n          card.classList.remove(\"hidden\");\n          card.classList.add(\"animate-in\");\n        });\n        setTimeout(() => card.classList.remove(\"animate-in\"), 500);\n      } else {\n        card.classList.add(\"hidden\");\n        setTimeout(() => (card.style.display = \"none\"), 350);\n      }\n    });\n  });\n});\n\nfilterButtons[0].dispatchEvent(new Event(\"click\"));\n\n\n  //  7.  Basket init\n\n(0,_basketModule_js__WEBPACK_IMPORTED_MODULE_3__.initBasket)();\n\n//# sourceURL=webpack://restaurant/./src/scripts/menu.js?");

/***/ }),

/***/ "./src/styles/basketModule.css":
/*!*************************************!*\
  !*** ./src/styles/basketModule.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/basketModule.css?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/index.css?");

/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/menu.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/menu.js");
/******/ 	
/******/ })()
;