

import homeAnim from "./home-anim";

homeAnim.init();

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

