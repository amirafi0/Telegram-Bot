const numberOfDots = 50;
const container = document.getElementById('dot-container');

function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.animationDuration = Math.random() * 10 + 5 + 's';
    dot.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(dot);
}

for (let i = 0; i < numberOfDots; i++) {
    createDot();
}



function goBack() {
    window.history.back();
}