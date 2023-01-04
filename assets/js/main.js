// управление меню
const menuBtn = document.querySelector('.navbar__burger');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('.body');

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active');
  navbar.classList.toggle('active');
  body.classList.toggle('active');
});
