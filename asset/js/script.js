// navbar toogle 
const navbar =document.querySelector('.navbar_bar');
const navbarBar =document.querySelector('.navbar_menu');
navbar.addEventListener('click',() => {
    navbarBar.classList.toggle('active')
})