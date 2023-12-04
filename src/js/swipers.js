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
         centeredSlides: false,
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

if (window.screen.width > 768) {
   const includeSwiperDescktop = new Swiper(".include__swiper-descktop", {
      slidesPerView: 1,
      slidesPerGroup: 1,

      navigation: {
         nextEl: ".include__swiper-next",
         prevEl: ".include__swiper-prev",
      },

      pagination: {
         el: ".include__swiper-pagination",
      },
   });
} else {
   const includeSwiperDescktop = new Swiper(".include__swiper-mobile", {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 16,

      navigation: {
         nextEl: ".include__swiper-next",
         prevEl: ".include__swiper-prev",
      },

      pagination: {
         el: ".include__swiper-pagination",
      },
   });
}

const exampleSwiper = new Swiper(".example__swiper", {
   slidesPerView: "auto",
   slidesPerGroup: 1,
   spaceBetween: 10,
   loop: true,

   breakpoints: {
      768: {
         spaceBetween: 20,
         centeredSlides: false,
      },
   },
});
