const panels = document.querySelectorAll('.panel');
const headings = document.querySelectorAll('h2');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removePanelOpenClass();
        panel.classList.add('panel-open');
    });
});


// function removePanelOpenClass () {
//     for(panel of panels) {
//         panel.classList.remove('panel-open')
//     }
// };


// You can also do removePanelOpenClass fucntion this way:
function removePanelOpenClass () {
    panels.forEach((panel) => {
        panel.classList.remove('panel-open');
    });
};
