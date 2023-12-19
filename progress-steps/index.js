const progressLine = document.getElementById('progress');
const steps = document.querySelectorAll('.step');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev')

let activeNow = 1;

nextButton.addEventListener('click', () => {
    activeNow++;

    if(activeNow > steps.length) {
        activeNow = steps.length;
    }
    update();
});

prevButton.addEventListener('click', () => {
    activeNow--;

    if(activeNow < 1) {
        activeNow = 1;
    }
    update();
});

function update () {
    steps.forEach((step, index) => {
        if(index < activeNow) {
            step.classList.add('active');
        } else {
            step.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%';

    if(activeNow === 1) {
        prevButton.disabled = true;
    } else if (activeNow === steps.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}

