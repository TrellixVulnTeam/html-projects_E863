// document.querySelectorAll('.product__color').forEach(item => {
//     item.addEventListener('click', event => {
//         document.querySelectorAll('.product__color').forEach(item => {
//             item.classList.remove('active');
//         });
//         item.classList.add('active');
//     });
// });

$('.product__color').click(function () {
    $('.product__color').toggleClass('active');
});

