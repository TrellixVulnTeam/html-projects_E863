document.addEventListener('click', function (event) {
    let id = event.target.dataset.id;
    if (!id) return;

    let elem = document.getElementById(id);
    elem.classList.add('loaded');

    document.querySelectorAll('.back').forEach(item => {
        item.addEventListener('click', event => {
            elem.classList.remove('loaded');
        });
    });
});





