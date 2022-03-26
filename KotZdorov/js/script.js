'use strict';

// Burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click', event => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});



// Popup
let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let login = document.querySelector('.header__login');
let popupBtn = document.querySelector('.popup__btn');

if (popup) {
    popup.style.display = 'none';
}

if (overlay && popupBtn) {
    hidePopup(overlay);
    hidePopup(popupBtn);
}

if (login) {
    login.addEventListener('click', function () {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });
}

function hidePopup(elem) {
    elem.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
}

// Ibg
function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();