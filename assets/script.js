const slides = [
    {
        image: "./assets/images/slideshow/slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        image: "./assets/images/slideshow/slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        image: "./assets/images/slideshow/slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        image: "./assets/images/slideshow/slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;

// Sélection des éléments
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.getElementById('banner-text');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Affiche la slide courante
function showSlide(index) {
    bannerImg.src = slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

// Génère les points (dots)
function createDots() {
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' dot_selected' : '');
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
}

// Navigation flèches
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Initialisation
createDots();
showSlide(currentIndex);
