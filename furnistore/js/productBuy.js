'use strict';

function getCount() {
    let plus = document.querySelector('.product__amount-btn-plus');
    let minus = document.querySelector('.product__amount-btn-minus');

    plus.addEventListener('click', function () {
        let number = document.querySelector('.product__amount-input');
        number.value++;
    });

    minus.addEventListener('click', function () {
        let number = document.querySelector('.product__amount-input');
        if (number.value >= 2) {
            number.value--;
        }
    });
}
getCount();

let buttonBuy = document.querySelector('.product__buy');
buttonBuy.addEventListener('click', function () {
    let number = document.querySelector('.product__amount-input');
    let productTitle = document.querySelector('.product__title');
    let color = document.querySelector('.product__color.active');

    let items = [];
    if (localStorage.getItem('cart') != null) {
        items = JSON.parse(localStorage.getItem('cart'));
    }

    let item = {
        id: +buttonBuy.dataset.id,
        title: productTitle.textContent,
        price: +buttonBuy.dataset.price,
        amount: +number.value,
        color: color.textContent,
        link: buttonBuy.dataset.link,
        image: buttonBuy.dataset.image,
    };

    items.push(item);
    console.log(item);
    localStorage.setItem('cart', JSON.stringify(items));
    updateCount();
});










function updateCount() {
    let sumAmount = 0;
    let items = JSON.parse(localStorage.getItem('cart'));
    let basket = document.querySelector('.basket-icon');
    let notice = document.querySelector('.basket-dropdown');
    let basketMobile = document.querySelector('.footer__panel-count');
    let sumMobile = document.querySelector('.icon-price');
    let totalPrice = 0;


    for (let i in items) {
        sumAmount += items[i].amount;
        totalPrice += items[i].price * items[i].amount;
    }
    basket.innerHTML += `<span class="icon-total">
    <span class="icon-count">${sumAmount}</span>
</span>`;

    sumMobile.innerHTML = totalPrice + '&nbsp;руб';

    basketMobile.innerHTML = `${sumAmount}`;


    if (sumAmount > 0) {
        notice.classList.remove('basket__list-hidden');
    }
}
