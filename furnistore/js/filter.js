let filterSection = document.querySelectorAll('.js-toggler');
filterSection.forEach(item => {
    item.addEventListener('click', function (event) {
        let parent = event.target.parentNode;
        let ul = parent.querySelector('.js-filter__section-values');
        ul.hidden = !ul.hidden;

        let angle = parent.querySelector('.fa-angle-down');
        angle.classList.toggle('fa-angle-up');
    });
});














