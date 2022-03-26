document.querySelectorAll('.about__body').forEach(item => {
    item.style.display = 'none';
});

let openList = document.querySelectorAll('.about__header');
openList.forEach(item => {
    item.addEventListener('click', function (event) {
        let parentList = event.target.parentNode;
        let aboutBio = parentList.querySelector('.about__body');
        if (aboutBio.style.display == 'none') {
            aboutBio.style.display = 'block'
        } else {
            aboutBio.style.display = 'none'
        };

        let angleList = parentList.querySelector('.fa-angle-down');
        angleList.classList.toggle('fa-angle-up');
    });
});


