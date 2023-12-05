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

const requirementsSwiper = new Swiper(".requirements__swiper", {
   slidesPerView: 1,
   slidesPerGroup: 1,

   navigation: {
      nextEl: ".requirements__swiper-next",
      prevEl: ".requirements__swiper-prev",
   },
});

const examplesSwiper = new Swiper(".examples__swiper", {
   slidesPerView: 1.75,
   slidesPerGroup: 1,
   spaceBetween: 10,

   breakpoints: {
      768: {
         slidesPerView: 3.9,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
   },

   on: {
      init: function (swiper) {
         const slides = this.slides;

         if (window.screen.width > 768) {
            const activeSlide = swiper.activeIndex + 1;

            slides[activeSlide].classList.add("show-name");

            slides.forEach((slide, i) => {
               if (i == activeSlide) {
                  return;
               }

               if (i % 2 !== 0) {
                  slide.classList.add("bottom-active");
               }
            });
         } else {
            const activeSlide = swiper.activeIndex;

            slides[activeSlide].classList.add("show-name");
         }
      },

      slideChange: function (swiper) {
         let slides = this.slides;

         if (window.screen.width > 768) {
            let activeSlide = swiper.activeIndex + 1;

            slides[activeSlide - 1].classList.remove("show-name");
            slides[activeSlide + 1].classList.remove("show-name");
            slides[activeSlide].classList.add("show-name");

            slides[activeSlide + 1].classList.remove("bottom-active");
            slides[activeSlide + 2].classList.add("bottom-active");
         } else {
            let activeSlide = swiper.activeIndex;

            if (activeSlide !== 0) {
               slides[activeSlide - 1].classList.remove("show-name");
            }

            slides[activeSlide + 1].classList.remove("show-name");
            slides[activeSlide].classList.add("show-name");
         }
      },
   },
});
