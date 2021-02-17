let hamburger = document.querySelector('.header__mobile');
let links = document.querySelector('.header__menu');
let burgerOpen = false;
hamburger.addEventListener('click', () => {
    if (!burgerOpen) {
        hamburger.classList.add('open');
        links.classList.add('open');
        burgerOpen = true;
    } else {
        hamburger.classList.remove('open');
        links.classList.remove('open');
        burgerOpen = false;
    }
});