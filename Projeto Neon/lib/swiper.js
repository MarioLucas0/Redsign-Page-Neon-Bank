var swiper = new Swiper('.cards-depoimentos', {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: '.third-hero .top .pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16
    },
    420: {
      slidesPerView: 1.8,
      spaceBetween: 16
    },

    600: {
      slidesPerView: 2.2,
      spaceBetween: 15
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 32
    }
  }
})
