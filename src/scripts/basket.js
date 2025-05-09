import '../styles/basket.css';

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
    brandText.innerHTML = '<h1>ПОСИДИМ</h1><span>coffee, tea and food</span>';

    navRight.append(logo, brandText);
    nav.append(navLeft, navRight);
    header.append(nav);

    document.body.prepend(header);
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


});