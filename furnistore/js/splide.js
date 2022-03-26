let secondarySlider = new Splide('#secondary-slider').mount();
let primarySlider = new Splide('#primary-slider');
primarySlider.sync(secondarySlider).mount();

document.addEventListener('DOMContentLoaded', function () {
    let secondarySlider = new Splide('#secondary-slider', {
        fixedWidth: 100,
        height: 140,
        // width: '40%',
        gap: 90,
        cover: true,
        isNavigation: true,
        focus: 'center',
        breakpoints: {
            '1252': {
                gap: 80,
            },
            '1192': {
                gap: 60,
            },
            '1100': {
                gap: 50,
            },
            '1000': {
                fixedWidth: 90,
                height: 120,
                gap: 40,
            },
            '900': {
                fixedWidth: 80,
                height: 110,
                gap: 30,
            },
            '780': {
                fixedWidth: 70,
                height: 100,
                gap: 20,
            },
        },
    }).mount();

    let primarySlider = new Splide('#primary-slider', {
        type: 'fade',
        heightRatio: 0.2,
        // width: '40%',
        height: 600,
        pagination: false,
        arrows: false,
        cover: true,
        autoWidth: true,
        breakpoints: {
            '792': {
                height: 400,
            },
            '768': {
                height: 300,
            },
            '710': {
                height: 280,
            },
            '680': {
                width: '90%',
                height: 500,
            },
            '450': {
                width: '90%',
                height: 300,
            }
        },

    });

    primarySlider.sync(secondarySlider).mount();
});