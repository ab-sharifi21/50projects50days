const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');

leftDiv.addEventListener('mouseenter', () => {
    leftDiv.classList.add('hover-left');
});
leftDiv.addEventListener('mouseleave', () => {
    leftDiv.classList.remove('hover-left')
});

rightDiv.addEventListener('mouseenter', () => {
    rightDiv.classList.add('hover-right');
});
rightDiv.addEventListener('mouseleave', () => {
    rightDiv.classList.remove('hover-right');
});
