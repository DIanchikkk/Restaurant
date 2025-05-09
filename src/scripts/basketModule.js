// Функция для создания кнопки корзины
export function createBasketButton() {
    const circleButton = document.createElement('a');
    circleButton.href = '#';
    circleButton.className = 'circle-button';
    circleButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4v2h1l3.6 7.59-1.35 2.44c-.17.31-.25.65-.25 1 0 1.1.9 2 2 2h9v-2h-8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h5.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1h-14zm0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
    `;
    document.body.appendChild(circleButton);
    return circleButton;
}

// Функция для создания попапа корзины
export function createBasketPopup() {
    const basketPopup = document.createElement('div');
    basketPopup.className = 'basket-popup'; // по умолчанию скрыт (CSS делает это)
    basketPopup.innerHTML = `
    <div class="basket-content">
        <h2>Your cart</h2>
        <div class="basket-items"></div>
        <div class="basket-footer-buttons">
            <button class="close-basket">Close</button>
            <button class="order-all-basket">Order All</button>
        </div>
    </div>
`;
    document.body.appendChild(basketPopup);
    return basketPopup;
}

// Функция для обновления содержимого корзины
export function updateBasketItems() {
    const basketItemsContainer = document.querySelector('.basket-items');
    const items = JSON.parse(localStorage.getItem('basket')) || [];

    if (items.length === 0) {
        basketItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        basketItemsContainer.innerHTML = '';
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'basket-item-card';

            const img = document.createElement('img');
            img.src = item.image || 'https://via.placeholder.com/60';
            img.alt = item.name;

            const details = document.createElement('div');
            details.className = 'basket-item-details';

            const name = document.createElement('p');
            name.textContent = item.name;

            const qtyWrap = document.createElement('div');
            qtyWrap.className = 'quantity-controls';

            const minusBtn = document.createElement('button');
            minusBtn.textContent = '-';
            minusBtn.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    // если количество 1, удаляем товар полностью
                    items.splice(index, 1);
                }
                localStorage.setItem('basket', JSON.stringify(items));
                updateBasketItems(); // Обновляем корзину
            });

            const qtyText = document.createElement('span');
            qtyText.textContent = `${item.quantity}`;

            const plusBtn = document.createElement('button');
            plusBtn.textContent = '+';
            plusBtn.addEventListener('click', () => {
                item.quantity++;
                localStorage.setItem('basket', JSON.stringify(items));
                updateBasketItems(); // Обновляем корзину
            });

            qtyWrap.appendChild(minusBtn);
            qtyWrap.appendChild(qtyText);
            qtyWrap.appendChild(plusBtn);

            details.appendChild(name);
            details.appendChild(qtyWrap);

            // Кнопки "Order" и "Delete"
            const buttonsWrap = document.createElement('div');
            buttonsWrap.className = 'basket-action-buttons';

            const orderBtn = document.createElement('button');
            orderBtn.textContent = 'Order';
            orderBtn.className = 'order-btn';
            orderBtn.addEventListener('click', () => {
                alert(`Order placed for: ${item.name} (${item.quantity})`);
                // Здесь можешь добавить код для отправки заказа на сервер и т.д.
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                items.splice(index, 1);
                localStorage.setItem('basket', JSON.stringify(items));
                updateBasketItems(); // Обновляем корзину
            });

            buttonsWrap.appendChild(orderBtn);
            buttonsWrap.appendChild(deleteBtn);

            card.appendChild(img);
            card.appendChild(details);
            card.appendChild(buttonsWrap);

            basketItemsContainer.appendChild(card);
        });
    }
}

// Функция для добавления товара в корзину
export function addItemToBasket(item) {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket.push(item);
    localStorage.setItem('basket', JSON.stringify(basket));
}

// Новая функция initBasket для инициализации корзины
export function initBasket() {
    const basketButton = createBasketButton();   // Создаем кнопку корзины
    const basketPopup = createBasketPopup();     // Создаем попап корзины
    updateBasketItems();                         // Обновляем содержимое корзины

    // Открытие попапа при клике на кнопку корзины
    basketButton.addEventListener('click', (e) => {
        e.preventDefault();
        basketPopup.classList.toggle('active'); // Переключаем видимость
    });

    // Закрытие попапа при клике на "Close"
    const closeBtn = basketPopup.querySelector('.close-basket');
    closeBtn.addEventListener('click', () => {
        basketPopup.classList.remove('active');
    });

    // Обработчик кнопки "Order All"
    const orderAllBtn = basketPopup.querySelector('.order-all-basket');
    orderAllBtn.addEventListener('click', () => {
        const basket = JSON.parse(localStorage.getItem('basket')) || [];

        if (basket.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Сформируем сообщение о заказе
        const summary = basket.map(item => `${item.name} x${item.quantity}`).join('\n');
        alert(`Order placed for:\n${summary}`);

        // Очистка корзины после оформления
        localStorage.removeItem('basket');
        updateBasketItems(); // Обновляем корзину
        basketPopup.classList.remove('active');
    });
}
