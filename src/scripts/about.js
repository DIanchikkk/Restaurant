import '../styles/about.css';
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
    logo.src = '../assets/images/logo1.png';
    logo.alt = 'Logo';
    logo.className = 'logo';

    const brandText = document.createElement('div');
    brandText.className = 'brand-text';
    brandText.innerHTML = '<h1>POSIDIM</h1><span>coffee, tea and food</span>';

    navRight.append(logo, brandText);
    nav.append(navLeft, navRight);
    header.append(nav);

    document.body.prepend(header);
   

    // Создание секции о нас
    const aboutUs = document.createElement('div');
    aboutUs.className = 'about-us';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'about-us__image-wrapper';
    aboutUs.appendChild(imageWrapper);

    const img = document.createElement('img');
    img.src = '../assets/images/cof.jpg';
    img.alt = 'Описание фотографии';
    img.className = 'about-us__image';
    imageWrapper.appendChild(img);

    const title = document.createElement('h1');
    title.className = 'about-us__title';
    title.textContent = 'About us';
    imageWrapper.appendChild(title);

    const subtitle = document.createElement('h2');
    subtitle.className = 'about-us__subtitle';
    subtitle.innerHTML = 
    'We bring you unforgettable moments with our delicious dishes! <br>' +
    'Whether you’re here to relax or catch up with friends, <br> we promise a delightful journey with every dish!';

    imageWrapper.appendChild(subtitle);

    document.body.appendChild(aboutUs);

    // Создание заголовка о кофейне
    const ourHistory = document.createElement('h2');
    ourHistory.className = 'our-history-title';
    ourHistory.textContent = 'Our Coffee Shop';
    document.body.appendChild(ourHistory);

    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';

    const gallery = document.createElement('div');
    gallery.className = 'about-section__gallery';
    aboutSection.appendChild(gallery);

    const mainImage = document.createElement('img');
    mainImage.className = 'about-section__main-image';
    mainImage.src = '../assets/images/barista.jpg';
    mainImage.alt = 'Main photo';
    gallery.appendChild(mainImage);

    const content = document.createElement('div');
    content.className = 'about-section__content';
    aboutSection.appendChild(content);

    const thumbnails = document.createElement('div');
    thumbnails.className = 'about-section__thumbnails';
    content.appendChild(thumbnails);

    const imageSources = [
        '../assets/images/barista.jpg',
        '../assets/images/coffee.jpg',
        '../assets/images/coffee.webp',
        '../assets/images/history.WEBP',
    ];

    imageSources.forEach((src, index) => {
        const thumb = document.createElement('img');
        thumb.className = 'about-section__thumbnail';
        thumb.src = src;
        thumb.alt = 'Thumbnail';
        thumb.style.cursor = 'pointer';
        thumb.style.filter = 'grayscale(100%)';

        // При клике на миниатюру меняем изображение
        thumb.addEventListener('click', () => {
            mainImage.src = src;
            document.querySelectorAll('.about-section__thumbnail').forEach(img => {
                img.style.filter = 'grayscale(100%)';
            });
            thumb.style.filter = 'grayscale(0%)';
            currentIndex = index;
        });

        thumbnails.appendChild(thumb);
    });

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `
        Our coffee shop takes its name from the passion for craft and the warmth of shared moments.<br><br>
        Inspired by timeless traditions and the artistry of coffee making, we bring together the finest beans, carefully sourced from high-altitude farms around the world.<br><br>
        Every cup is a tribute to balance, simplicity, and dedication. We believe coffee is more than a drink—it’s a ritual, a pause, a chance to reconnect.<br><br>
        At our roastery, we meticulously roast each batch to unlock unique flavors that celebrate both heritage and innovation.<br><br>
        From bean to cup, we invite you to experience coffee with intention, crafted with care, and served with heart.<br><br>
        Every cup is a tribute to balance, simplicity, and dedication. We believe coffee is more than a drink—it’s a ritual, a pause, a chance to reconnect.
    `;
    content.appendChild(paragraph);

    document.body.appendChild(aboutSection);

    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        mainImage.src = imageSources[currentIndex];
        document.querySelectorAll('.about-section__thumbnail').forEach((img, idx) => {
            img.style.filter = idx === currentIndex ? 'grayscale(0%)' : 'grayscale(100%)';
        });
    }, 3000);

    // Новый блок с историей кофейни
    const historySection = document.createElement('div');
    historySection.className = 'history-section';
    document.body.appendChild(historySection);

    const historyImageWrapper = document.createElement('div');
    historyImageWrapper.className = 'history-section__image-wrapper';
    historySection.appendChild(historyImageWrapper);

    const historyImg = document.createElement('img');
    historyImg.src = '../assets/images/barist.JPG'; // Замените на нужное изображение
    historyImg.alt = 'Coffee Shop History';
    historyImg.className = 'history-section__image';
    historyImageWrapper.appendChild(historyImg);

    const historyContent = document.createElement('div');
    historyContent.className = 'history-section__content';
    historySection.appendChild(historyContent);

    const name = document.createElement('h3');
    name.className = 'history-section__title';
    name.textContent = "John's history";
    historyContent.appendChild(name);

    const description = document.createElement('p');
    description.className = 'history-section__description';
    description.innerHTML = `
        Founded in 2010, our coffee shop has always been about more than just serving coffee. We strive to create a space where people can connect, relax, and enjoy great coffee. <br><br>
        Our founder, John Doe, a passionate barista, dreamed of creating a place where everyone can find their favorite brew and feel at home. With over 10 years of experience, John believes that coffee is an experience to be savored.
    `;
    historyContent.appendChild(description);

    // Добавляем новую секцию для формы бронирования
    const reservationSection = document.createElement('section');
    reservationSection.className = 'reservation-section';

    const formTitle = document.createElement('h2');
    formTitle.className = 'reservation-title';
    formTitle.textContent = 'Reserve Your Table';
    reservationSection.appendChild(formTitle);

    const formDescription = document.createElement('p');
    formDescription.className = 'reservation-description';
    formDescription.textContent =
        'We are willing to help you make the reservation online to save your time and money or you can call us directly through the customer service hotline: 225-88888';
    reservationSection.appendChild(formDescription);

    const form = document.createElement('form');
    form.className = 'reservation-form';
    form.noValidate = true;

    const fields = [
        { label: 'Full Name', type: 'text', name: 'name', placeholder: 'Enter your name', required: true },
        { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email', required: true },
        { label: 'Phone', type: 'tel', name: 'phone', placeholder: 'Enter your phone', required: true },
        { label: 'Date', type: 'date', name: 'date', required: true },
        { label: 'Time', type: 'time', name: 'time', required: true },
        { label: 'Number of People', type: 'number', name: 'people', placeholder: 'Number of people', min: 1, required: true }
    ];

    // Генерация полей формы
    fields.forEach((field, index) => {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.className = 'form-field';

        const label = document.createElement('label');
        label.textContent = field.label;
        label.setAttribute('for', field.name);

        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.id = field.name;
        if (field.placeholder) input.placeholder = field.placeholder;
        if (field.required) input.required = true;
        if (field.min) input.min = field.min;

        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);

        form.appendChild(fieldWrapper);

        // Добавляем класс для разбиения на 2 колонки
        if (index % 2 === 0) {
            fieldWrapper.classList.add('left');
        } else {
            fieldWrapper.classList.add('right');
        }
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'submit-button';
    submitButton.textContent = 'Book Now';

    form.appendChild(submitButton);
    reservationSection.appendChild(form);
    document.body.appendChild(reservationSection);

    // Валидация формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            alert('Reservation submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });

    // Создание футера
    const footer = document.createElement('footer');
    footer.className = 'footer';

    // Левая колонка футера
    const footerLeft = document.createElement('div');
    footerLeft.className = 'footer__left';

    const footerTitle = document.createElement('h2');
    footerTitle.className = 'footer__title';
    footerTitle.textContent = 'Contacts';

    const descriptions = document.createElement('p');
    descriptions.className = 'footer__description';
    descriptions.textContent = 'We are passionate about crafting the perfect coffee experience for our community every day.';

    const divider = document.createElement('hr');
    divider.className = 'footer__divider';

    const infoColumns = document.createElement('div');
    infoColumns.className = 'footer__info-columns';

    const address = document.createElement('div');
    address.className = 'footer__info-block';
    address.innerHTML = `
        <strong>Address</strong><br>
        123 Brew Street,<br>
        Coffee City, CC 45678
    `;

    const contact = document.createElement('div');
    contact.className = 'footer__info-block';
    contact.innerHTML = `
        <strong>Phone</strong><br>
        <a href="tel:+1234567890">+1 (234) 567-890</a><br>
        <a href="tel:+9876543210">+1 (987) 654-3210</a>
    `;

    const email = document.createElement('div');
    email.className = 'footer__info-block';
    email.innerHTML = `
        <strong>Email</strong><br>
        <a href="mailto:admin@fooday.com">admin@fooday.com</a><br>
        <a href="mailto:support@fooday.com">support@fooday.com</a>
    `;

    infoColumns.appendChild(address);
    infoColumns.appendChild(contact);
    infoColumns.appendChild(email);

    footerLeft.appendChild(footerTitle);
    footerLeft.appendChild(descriptions);
    footerLeft.appendChild(divider);
    footerLeft.appendChild(infoColumns);

    // Правая колонка футера (расписание)
    const footerRight = document.createElement('div');
    footerRight.className = 'footer__right';

    const scheduleBox = document.createElement('div');
    scheduleBox.className = 'footer__schedule';

    const scheduleTitle = document.createElement('div');
    scheduleTitle.className = 'footer__schedule-title';
    scheduleTitle.textContent = 'OPEN HOURS';

    const scheduleTime = document.createElement('div');
    scheduleTime.className = 'footer__schedule-time';
    scheduleTime.innerHTML = `
        Monday: 8 AM - 8 PM<br>
        Tuesday: 8 AM - 8 PM<br>
        Wednesday: 8 AM - 8 PM<br>
        Thursday: 8 AM - 8 PM<br>
        Friday: 8 AM - 10 PM<br>
        Saturday: 9 AM - 6 PM<br>
        Sunday: Closed
    `;

    const reservationLabel = document.createElement('div');
    reservationLabel.className = 'footer__reservation';
    reservationLabel.textContent = 'Reservation Numbers';

    const reservationNumber = document.createElement('div');
    reservationNumber.className = 'footer__reservation-number';
    reservationNumber.textContent = '+1 (234) 567-890';

    scheduleBox.appendChild(scheduleTitle);
    scheduleBox.appendChild(scheduleTime);
    scheduleBox.appendChild(reservationLabel);
    scheduleBox.appendChild(reservationNumber);

    footerRight.appendChild(scheduleBox);

    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);

    document.body.appendChild(footer);

    // Intersection Observer для появления при скролле
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scheduleBox.classList.remove('footer__schedule--visible');
                void scheduleBox.offsetWidth;
                scheduleBox.classList.add('footer__schedule--visible');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(footer);
    initBasket()
});
