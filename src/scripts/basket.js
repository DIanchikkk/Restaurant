import '../styles/basket.css';
import '../styles/basketModule.css';
import {
    initBasket,          
    registerBasketContainer,
    updateBasketItems,
    updateAllBasketItems
} from './basketModule.js';



document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.className = 'header-new';

    const nav = document.createElement('nav');

    const navLeft = document.createElement('ul');
    navLeft.className = 'nav-left';

    const pages = [
        { text: 'Home', href: 'index.html' },
        { text: 'About', href: 'about.html' },
        { text: 'Menu', href: 'menu.html' },
        { text: 'Basket', href: 'basket.html' }
    ];
    
    pages.forEach((page) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = page.href;
        a.textContent = page.text;
    
        if (window.location.pathname.endsWith(page.href)) {
            a.classList.add('active');
        }
    
        li.appendChild(a);
        navLeft.appendChild(li);
    });

    const navRight = document.createElement('div');
    navRight.className = 'nav-right';

    const logo = document.createElement('img');
    logo.src = '../assets/images/logo.png';
    logo.alt = 'Logo';
    logo.className = 'logo';

    const brandText = document.createElement('div');
    brandText.className = 'brand-text';
    brandText.innerHTML = '<h1>POSIDIM</h1><span>coffee, tea and food</span>';

    navRight.append(logo, brandText);
    nav.append(navLeft, navRight);
    header.append(nav);

    document.body.prepend(header);

    initBasket();
const mainContainer = document.querySelector('.basket-items');
if (mainContainer) {
    registerBasketContainer(mainContainer);
}
// Обработчики кнопок на странице корзины 
const orderAllPageBtn = document.querySelector('.order-all-page');
const clearBasketPageBtn = document.querySelector('.clear-basket-page');

if (orderAllPageBtn && clearBasketPageBtn) {
    orderAllPageBtn.addEventListener('click', () => {
        const basket = JSON.parse(localStorage.getItem('basket')) || [];

        if (basket.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const summary = basket.map(item => `${item.name} x${item.quantity}`).join('\n');
        alert(`Order placed for:\n${summary}`);

        // Очищаю корзину
        localStorage.removeItem('basket');
        updateAllBasketItems();
    });

    clearBasketPageBtn.addEventListener('click', () => {
        localStorage.removeItem('basket');
        updateAllBasketItems();
        alert('Basket cleared!');
    });
}


});
