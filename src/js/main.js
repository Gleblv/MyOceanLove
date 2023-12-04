window.addEventListener("DOMContentLoaded", () => {
   if (document.querySelector(".include__swiper")) {
      const tabsContainer = document.querySelector(".include__tabs"),
         tabs = document.querySelectorAll(".include__tab"),
         blocks =
            window.screen.width > 768
               ? document.querySelectorAll(".include__slider-desktop")
               : document.querySelectorAll(".include__slider-mobile");

      tabsContainer.addEventListener("click", (e) => {
         let target = e.target;
         let activeBlockClass = "";

         if (target.classList.contains("include__tab")) {
            tabs.forEach((tab) => {
               tab.classList.remove("active");
            });

            target.classList.add("active");
            activeBlockClass = target.dataset.blockName;

            blocks.forEach((block) => {
               block.classList.contains(activeBlockClass)
                  ? block.classList.add("active")
                  : block.classList.remove("active");
            });
         }
      });
   }
});
