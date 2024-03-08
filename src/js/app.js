
import menuAnim from "./menu-anim";
import homeAnim from "./home-anim";

homeAnim.init();
menuAnim.init();


function init(e) {
  if (!e.target.closest('.item')) return;
  let hero = document.querySelector('div[data-pos="0"]');
  let target = e.target.parentElement;
  [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
}

window.addEventListener('click',init,false);

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


