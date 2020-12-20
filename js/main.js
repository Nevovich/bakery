var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    width: 480,
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    themeColor: '#56544e'},
     breakpoints: {
    // when window width is >= 320px
    1580: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
});