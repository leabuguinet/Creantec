
import menuAnim from "./menu-anim";
import homeAnim from "./home-anim";

homeAnim.init();
menuAnim.init();

///SWIPER
var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  effect: 'fade',
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 6500,
    waitForTransition: true,
  }
});
swiper.slideNext(0);
setTimeout(() => {
  swiper.slidePrev(1000);
  swiper.autoplay.start();
}, 1500);

///



var swiper2 = new Swiper(".brandSwiper", {
  slidesPerView: 6,
  loop: true,
  //speed: 100,
  autoplay: {
    delay: 1500,
    waitForTransition: true,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
