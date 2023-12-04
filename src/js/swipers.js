const floristicSwiper = new Swiper(".floristics__swiper", {
   slidesPerView: 1,
   slidesPerGroup: 1,

   navigation: {
      nextEl: ".floristics__swiper-next",
      prevEl: ".floristics__swiper-prev",
   },

   pagination: {
      el: ".floristics__swiper-pagination",
   },
});

const ideasSwiper = new Swiper(".ideas__swiper", {
   slidesPerView: "auto",
   centeredSlides: true,
   slidesPerGroup: 1,
   spaceBetween: 10,
   loop: true,

   breakpoints: {
      768: {
         slidesPerView: 4,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
   },

   navigation: {
      nextEl: ".ideas__swiper-next",
   },
});

const decorationSlider = new Swiper(".decoration-slider__swiper", {
   slidesPerView: 1,
   slidesPerGroup: 1,

   navigation: {
      nextEl: ".decoration-slider__swiper-slide_next",
      prevEl: ".decoration-slider__swiper-slide_prev",
   },
});
