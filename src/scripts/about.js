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
        Whether you’re here to relax or catch up with friends, we promise a delightful journey with every dish.
    `;
    imageWrapper.appendChild(subtitle);

    document.body.appendChild(aboutUs);

    const ourHistory = document.createElement('h2');
    ourHistory.className = 'our-history-title';
    ourHistory.textContent = 'Our Coffee Shop';
    document.body.appendChild(ourHistory);

    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';

    // Gallery on the left
    const gallery = document.createElement('div');
    gallery.className = 'about-section__gallery';
    aboutSection.appendChild(gallery);

    const mainImage = document.createElement('img');
    mainImage.className = 'about-section__main-image';
    mainImage.src = '../assets/images/barista.jpg';
    mainImage.alt = 'Main photo';
    gallery.appendChild(mainImage);

    // Content on the right
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
        thumb.style.filter = 'grayscale(100%)'; // Initially black and white

        thumb.addEventListener('click', () => {
            mainImage.src = src;

            // Make all thumbnails grayscale
            document.querySelectorAll('.about-section__thumbnail').forEach(img => {
                img.style.filter = 'grayscale(100%)';
            });

            // Set selected thumbnail to color
            thumb.style.filter = 'grayscale(0%)';

            // Update index for auto-slideshow
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

    // Auto-slideshow
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        mainImage.src = imageSources[currentIndex];

        // Update thumbnail filters
        document.querySelectorAll('.about-section__thumbnail').forEach((img, idx) => {
            img.style.filter = idx === currentIndex ? 'grayscale(0%)' : 'grayscale(100%)';
        });
    }, 3000);
});
