'use strict';

let filterBtn = document.querySelector('.js-btn');
let sidebar = document.querySelector('.collection__sidebar');

filterBtn.addEventListener('click', event => {
    sidebar.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', event => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});
