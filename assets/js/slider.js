const swiper = new Swiper('.swiper3', {
  spaceBetween: 20,
  enabled: true,
  breakpoints: {
    576: {
      enabled: false,
      slidesPerView: 3,
      speed: 800,
    },
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});

const swiper2 = new Swiper('.swiper2', {
  spaceBetween: 20,

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});

const swiper3 = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
    slidesPerView: 1,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: false,
  },

  breakpoints: {
    200: {
      autoplay: {
        delay: 3000,
        enabled: true,
      },
      spaceBetween: 20,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
      },
      slidesPerView: 1,
    },

    576: {
      spaceBetween: 20,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: false,
      },
      slidesPerView: 3,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
      },
    },
    800: {
      spaceBetween: 44,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: false,
      },
      slidesPerView: 3,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
      },
    },
  },
});
