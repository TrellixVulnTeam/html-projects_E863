'use strict';

let headerBurger = document.querySelector('.header__burger');
let navigation = document.querySelector('.menu__navigation-mobile');
let overlay = document.querySelector('.overlay');


navigation.style.display = 'none';

headerBurger.addEventListener('click', event => {
    navigation.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', event => {
    navigation.style.display = 'none';
    overlay.style.display = 'none';
});





