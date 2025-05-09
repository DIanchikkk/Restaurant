import '../styles/basket.css';
import '../styles/basketModule.css';
import { initBasket } from './basketModule.js';


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
    
        // ✅ Автоматическая установка active по текущему пути
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

initBasket()

});