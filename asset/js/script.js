// navbar toogle 
const navbar =document.querySelector('.navbar_bar');
const navbarBar =document.querySelector('.navbar_menu');
navbar.addEventListener('click',() => {
    navbarBar.classList.toggle('active')
})
// slider section 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(direction) {
    slides[currentSlide].classList.remove('active-slide');

    if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    } else if (direction === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
    }

    slides[currentSlide].classList.add('active-slide');
}