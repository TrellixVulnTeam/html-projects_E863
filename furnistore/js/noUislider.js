let uiSlider = document.getElementById('noUi-slider');

noUiSlider.create(uiSlider, {
    start: [729, 30990],
    connect: true,
    range: {
        'min': 729,
        'max': 30990
    },
});

let paddingMin = document.getElementById('min');
let paddingMax = document.getElementById('max');

uiSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        paddingMax.value = Math.round(values[handle]);
    } else {
        paddingMin.value = Math.round(values[handle]);
    }
});