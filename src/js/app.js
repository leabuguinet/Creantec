 // core version + navigation, pagination modules:
 //import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 //import 'swiper/css';
 //import 'swiper/css/navigation';
 //import 'swiper/css/pagination';

/*   const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 8500,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); */





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
