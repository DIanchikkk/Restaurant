import '../styles/about.css';

document.addEventListener('DOMContentLoaded', () => {

    const header = document.createElement('header');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'header__container';
    header.appendChild(container);

    const logo = document.createElement('div');
    logo.className = 'header__logo';
    logo.textContent = 'Coffee';
    container.appendChild(logo);

    const nav = document.createElement('nav');
    nav.className = 'header__nav';
    container.appendChild(nav);

    const navList = document.createElement('ul');
    navList.className = 'header__nav-list';
    nav.appendChild(navList);

    const links = ['Home', 'About', 'Menu', 'Contact'];
    links.forEach(text => {
        const listItem = document.createElement('li');
        listItem.className = 'header__nav-item';

        const link = document.createElement('a');
        link.className = 'header__nav-link';
        link.href = '#';
        link.textContent = text;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    document.body.prepend(header);

    const aboutUs = document.createElement('div');
    aboutUs.className = 'about-us';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'about-us__image-wrapper';
    aboutUs.appendChild(imageWrapper);

    const img = document.createElement('img');
    img.src = '../assets/images/kofeynja.webp';
    img.alt = 'Описание фотографии';
    img.className = 'about-us__image';
    imageWrapper.appendChild(img);

    const title = document.createElement('h1');
    title.className = 'about-us__title';
    title.textContent = 'About us';
    imageWrapper.appendChild(title);

    const subtitle = document.createElement('h2');
    subtitle.className = 'about-us__subtitle';
    subtitle.innerHTML = `
        We bring you unforgettable moments with our delicious dishes! <br>
        Each bite tells a story of passion and craftsmanship. <br>
        Whether you’re here to relax or catch up with friends, <br> we promise a delightful journey with every dish!
    `;
    imageWrapper.appendChild(subtitle);

    document.body.appendChild(aboutUs);

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

        // Новый блок с изображением и информацией
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
        name.textContent = `John's history`;
        historyContent.appendChild(name);
    
        const description = document.createElement('p');
        description.className = 'history-section__description';
        description.innerHTML = `
            Founded in 2010, our coffee shop has always been about more than just serving coffee. We strive to create a space where people can connect, relax, and enjoy great coffee. <br><br>
            Our founder, John Doe, a passionate barista, dreamed of creating a place where everyone can find their favorite brew and feel at home. With over 10 years of experience, John believes that coffee is an experience to be savored.
        `;
        historyContent.appendChild(description);
    
        // Применяем анимацию к контенту
        const words = description.innerHTML.split(' ').map((word, index) => 
            `<span style="animation-delay: ${index * 0.1}s">${word}</span>`
        ).join(' ');
        description.innerHTML = words;
            
            // Создаем секцию достижений
        const achievementsTitle = document.createElement('h2');
        achievementsTitle.className = 'achievements-title';
        achievementsTitle.textContent = 'Our Achievements';
        document.body.appendChild(achievementsTitle);

        const achievementsImageWrapper = document.createElement('div');
        achievementsImageWrapper.className = 'achievements-image-wrapper';
        document.body.appendChild(achievementsImageWrapper);
        
        // Массив изображений достижений
        const achievementsImages = [
            { src: '../assets/images/nagra.png', alt: 'Achievement 1', id: 'achievement-1'},
            { src: '../assets/images/sertif.png', alt: 'Achievement 2' }, // Добавь свое изображение
            { src: '../assets/images/nagrad.png', alt: 'Achievement 3' }  // Добавь свое изображение
        ];
        
        achievementsImages.forEach(item => {
            const img = document.createElement('img');
            img.className = 'achievements-image';
            img.src = item.src;
            img.alt = item.alt;
            achievementsImageWrapper.appendChild(img);
        });
        



        
});
