var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function(){
  mobileMenu.classList.toggle('show');
})