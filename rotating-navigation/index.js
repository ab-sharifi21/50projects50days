const showNav = document.querySelector('.show-nav');
const closeNav = document.querySelector('.hide-nav');
const container = document.querySelector('.container');
const navbar = document.querySelector('nav');

showNav.addEventListener('click', () => {
    container.classList.add('show-nav');
});

closeNav.addEventListener('click', () => {
    container.classList.remove('show-nav')
})


