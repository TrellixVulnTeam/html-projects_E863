$(document).ready(function () {
    $(".slider-main").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        merge: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        navClass: ['slider-left--index', 'slider-right--index'],
        navText: ['<i class="fa fa-angle-left" />', '<i class="fa fa-angle-right" />'],
    });
});

let owl = $('.bestseller__cards');
owl.owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    lazyLoad: true,
    margin: 16,
    autoplayHoverPause: false,
    merge: true,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
        375: {
            items: 2,
        },
        425: {
            items: 2,
        },
        756: {
            items: 3,
        },
        912: {
            items: 4
        },
        1216: {
            items: 5
        },
    },
    navClass: ['bestseller__slider-left', 'bestseller__slider-right'],
    navText: ['<i class="fas fa-angle-left" />', '<i class="fas fa-angle-right" />'],
});