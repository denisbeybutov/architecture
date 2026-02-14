const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const swiper = new Swiper('.projects__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    // Optional parameters
    loop: true,

    breakpoints: {
       
        "@0.8": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 2,
          
        },
        "@1.40": {
          slidesPerView: 3,
          
        },
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.projects__arrow-next',
      prevEl: '.projects__arrow-prev',
    },
  
  });