let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =  () => {
    menuIcon.classList.toggle('x.png')
    navbar.classList.toggle('active');
} 