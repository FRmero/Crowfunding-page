const hamburger = document.querySelector('.header__nav--hamburger');
const nav = document.getElementById('nav-items');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});