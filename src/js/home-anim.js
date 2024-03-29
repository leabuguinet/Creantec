gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const homeAnim = {
  init() {
    var tl = gsap.timeline({});
    tl.from(".swiper-text", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    });

    /* Animation of Who are we section blocks */
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-whoarewe",
        start: "top 90%",
        //end: "+=400",
        scrub: true,
        markers: false,
      },
    });

    tl.from(".section-whoarewe .whoareweImgAnim", {
      opacity: 0.8,
      scale: 0.7,
      duration: 1,
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-whoarewe",
        start: "top 85%",
        //end: "+=400",
        //scrub: true,
        markers: false,
      },
    });

    tl.from(".section-whoarewe .section-title", {
      opacity: 0.8,
      y: 50,
      duration: 1.2,
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-whoarewe",
        start: "top 85%",
        //end: "+=400",
        //scrub: true,
        markers: false,
      },
    });
    tl.fromTo(
      ".section-whoarewe .text-block",
      {
        y: 500,
        duration: 1.8,
      },
      {
        y: 0,
      }
    );

    let textBlock = document.querySelector(".section-whoarewe .text-block");
    let hoverTextBlock = gsap.to(textBlock, {
      scale: 1.12,
      duration: 0.3,
      paused: true,
      ease: "power1.inOut",
    });
    textBlock.addEventListener("mouseenter", () => hoverTextBlock.play());
    textBlock.addEventListener("mouseleave", () => hoverTextBlock.reverse());

    /* Animation of Icons card list */

    gsap.utils.toArray(".picto-block").forEach((pictoblock) => {
      let pictoBlocks = gsap.fromTo(
        ".picto-list",
        {
          x: -50,
          opacity: 0,
          duration: 0.08,
          ease: "power1.inOut",
          stagger: 0.01,
        },
        { opacity: 1, x: 0, duration: 0.05, stagger: 0.05 }
      );
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".picto-list",
        start: "top 60%",
        //end: "+=400",
        //scrub: true,
        markers: false,
      },
    });

    tl.from(".picto-block", {
      opacity: 0.8,
      y: 500,
      duration: 1,
      stagger: 0.2,
      ease: "Power2.easeOut",
    });

    /* Animation of Icons */

    //Chrono Icon
    gsap.utils.toArray(".picto-orange-stroke").forEach((picto) => {
      let hoverChrono = gsap.fromTo(
        ".picto-orange-stroke",
        {
          x: -50,
          opacity: 0,
          duration: 0.08,
          ease: "power1.inOut",
          stagger: 0.01,
        },
        { opacity: 1, x: 0, duration: 0.05, stagger: 0.05 }
      );

      let pictoChrono = document.querySelector(".reactivity");
      pictoChrono.addEventListener("mouseenter", () => hoverChrono.restart());
      pictoChrono.addEventListener("mouseleave", () => hoverChrono.kill());
    });

    //Handshake Icon

    let pictoHands = document.querySelector(".relation");
    let hoverHandshake = gsap.timeline({ paused: true, repeat: -1 });

    hoverHandshake
      .to(".picto-hands", { y: -25, duration: 0.6, ease: "ease.out" })
      .to(".picto-hands", { y: 0, duration: 0.5, ease: "ease.out" })
      .to(".picto-hands", { y: -10, duration: 0.5, ease: "ease.out" })
      .to(".picto-hands", { y: 0, duration: 0.3, ease: "ease.out" });

    pictoHands.addEventListener("mouseenter", () => hoverHandshake.play());

    pictoHands.addEventListener("mouseleave", () => {
      hoverHandshake.pause();

      let hoverHandshakeOut = gsap.timeline({ paused: true /* , repeat:-1 */ });
      hoverHandshakeOut.to(".picto-hands", {
        y: 0,
        duration: 0.6,
        ease: "ease.out",
      });
      hoverHandshakeOut.play();
    });

    //Lightbulb Icon
    gsap.utils.toArray(".light-move-rtl").forEach((picto) => {
      let hoverLight = gsap.fromTo(
        ".light-move-rtl",
        { x: 5, opacity: 0, ease: "power1.inOut", stagger: 0.01 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05 }
      );

      let pictoLight = document.querySelector(".innovation");
      pictoLight.addEventListener("mouseenter", () => hoverLight.restart());

      pictoLight.addEventListener("mouseleave", () => hoverLight.kill());
    });
    gsap.utils.toArray(".light-move-ltr").forEach((picto2) => {
      let hoverLight2 = gsap.fromTo(
        ".light-move-ltr",
        { x: -5, opacity: 0, ease: "power1.inOut", stagger: 0.01 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05 }
      );

      let pictoLight = document.querySelector(".innovation");
      pictoLight.addEventListener("mouseenter", () => hoverLight2.restart());

      pictoLight.addEventListener("mouseleave", () => hoverLight2.kill());
    });

    //Pencil Icon

    let pictoPencil = document.querySelector(".conception");
    let hoverPencil = gsap.timeline({ paused: true, repeat: 0 });

    hoverPencil.to(".picto-pencil", {
      rotate: -360,
      duration: 0.6,
      ease: "ease.out",
    });

    pictoPencil.addEventListener("mouseenter", () => hoverPencil.restart());
    pictoPencil.addEventListener("mouseleave", () => hoverPencil.kill());

    /* Animation of Services section blocks */

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-contact",
        start: "top 85%",
        //end: "+=400",
        //scrub: true,
        markers: false,
      },
    });

    /*       tl
      .from(".section-blocks.type2", {
        opacity: 0.8,
        y: 500,
      })
      
      
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-blocks.type2",
          start: "top 85%",
          //end: "+=400",
          //scrub: true,
          markers: false, 
          
        }
      }); */
    tl.fromTo(
      ".type2 .text-block",
      {
        y: 500,
        duration: 1.5,
      },
      {
        y: 0,
      }
    );

    let textBlock2 = document.querySelector(".type2 .text-block");
    //let hoverTextBlock2 = gsap.to(textBlock2, {scale: 1.1, duration: 0.3, paused: true, ease: "power1.inOut"});
    textBlock2.addEventListener("mouseenter", () => hoverTextBlock2.play());
    textBlock2.addEventListener("mouseleave", () => hoverTextBlock2.reverse());



    
    ///SWIPER
    var swiper = new Swiper(".swiper-container", {
      centeredSlides: true,
      effect: "fade",
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 6500,
        waitForTransition: true,
      },
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
  },
};

export default homeAnim;
