// Генерація зірок
const starsContainer = document.querySelector('.stars');
const numStars = 100;

function randomColor() {
    // Генерація випадкового кольору для зірок (світліший або темніший)
    const baseColors = ['#9b59b6', '#8e44ad', '#bb8fce', '#af7ac5', '#a569bd']; 
    return baseColors[Math.floor(Math.random() * baseColors.length)];
}

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 3;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    star.style.backgroundColor = randomColor();  // Задаємо випадковий колір

    starsContainer.appendChild(star);
}

const text = document.getElementById('main-text');
const buttonsContainer = document.getElementById('buttons-container');

// Анімація тексту
setTimeout(() => {
    text.style.opacity = '1';
}, 1000);

setTimeout(() => {
    text.style.transform = 'translate(-50%, -100%)';
    buttonsContainer.style.display = 'block';
    buttonsContainer.style.opacity = '1';
    buttonsContainer.style.transform = 'translate(-50%, -60%)';
}, 3000);
