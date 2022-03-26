let items = JSON.parse(localStorage.getItem('cart'));
let cartProduct = document.querySelector('.cart__product');
let sumItems = 0;

for (let i in items) {
    cartProduct.innerHTML += `<div id="cart-items-${i}" class="cart__item">
                                <div class="cart__item-img">
                                    <a href="${items[i].link}">
                                        <img src="${items[i].image}" alt="img">
                                    </a>
                                </div>
                                <div class="cart__item-name">
                                    <a href="${items[i].link}">
                                        ${items[i].title} (${items[i].color})
                                    </a>
                                </div>
                                <div class="product__amount">
                                    <div data-id="${i}" class="product__amount-btn-minus product__amount-btn">-</div>
                                    <input id="amount-input-${i}" class="product__amount-input" type="text" name="amount" value="${items[i].amount}">
                                    <div data-id="${i}" class="product__amount-btn-plus product__amount-btn">+</div>
                                </div>
                                <div id="cart-price-${i}" class="cart__price">${items[i].price * items[i].amount} руб</div>
                                <div data-id="${i}" class="cart__delete">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>`;
    console.log(items[i]);
    sumItems += items[i].price * items[i].amount;
}

let totalSum = document.querySelector('.cart__total-price');
totalSum.innerHTML = `${sumItems} ₽`;


document.querySelectorAll('.cart__delete').forEach(item => {
    item.addEventListener('click', event => {
        let productId = item.dataset.id;
        let cartProducts = document.getElementById('cart-items-' + productId);
        cartProducts.remove();
        items.splice(productId, 1);
        localStorage.setItem('cart', JSON.stringify(items));
        updateCount();
    });
});

document.querySelectorAll('.product__amount-btn-minus, .product__amount-btn-plus').forEach(item => {
    item.addEventListener('click', event => {
        let productId = item.dataset.id;
        let number = document.getElementById('amount-input-' + productId);
        if (item.classList.item(0) == 'product__amount-btn-plus') {
            number.value++;
        } else if (number.value <= 1) {
            return;
        } else {
            number.value--;
        }

        items[productId].amount = +number.value;
        localStorage.setItem('cart', JSON.stringify(items));

        let cartPrice = document.getElementById('cart-price-' + productId);
        cartPrice.innerHTML = items[productId].amount * items[productId].price + ' руб';
        updateCount();
    });
});

function updateCount() {
    let sumAmount = 0;
    let items = JSON.parse(localStorage.getItem('cart'));
    let basket = document.querySelector('.basket-icon');
    let totalSum = document.querySelector('.cart__total-price');
    let cartNotice = document.querySelector('.cart__notice-block');
    let cartPromocode = document.querySelector('.cart__promocode');

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
    totalSum.innerHTML = totalPrice + '&nbsp;руб';

    sumMobile.innerHTML = totalPrice + '&nbsp;руб';

    basketMobile.innerHTML = `${sumAmount}`;

    if (sumAmount == 0) {
        cartNotice.style.display = "block";
        cartPromocode.style.display = "none";
    }

    if (sumAmount > 0) {
        notice.classList.remove('basket__list-hidden');
    }
}
updateCount();

