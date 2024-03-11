gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(toggleClass)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const menuAnim = {

    init () {
        /* Animation of Who are we section blocks */
        var tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".swiper-container",
            
            start: "bottom top",
            endTrigger: 'body',
            end: "bottom bottom+10" ,   
            scrub: false,
            markers: false, 
            //pin: true,
            toggleClass: {targets: ".menu-menu-main-container", className: "menu-fixed"}
            }
        });
        
        
/*         let menuOpen = false;
        
        const tl2 = gsap.timeline({
          paused: true,
          defaults: { duration: 0.3, ease: "power1.inOut" }
        });
        
        tl2
          .fromTo(
            ".sub-menu .menu-item",
            { opacity: 0, y: "5em", stagger: 0.2 },
            { opacity: 1, y: "0em", stagger: 0.2 }
          );
        
        document.querySelector(".menu-item-has-children").addEventListener("mouseenter", () => {
          if (!menuOpen) {
            tl2.play();
            menuOpen = true;
          } else {
            tl2.reverse();
            menuOpen = false;
          }
        });

        document.querySelector(".menu-item-has-children").addEventListener("mouseleave", () => {
            if (!menuOpen) {
              tl2.play();
              menuOpen = true;
            } else {
              tl2.reverse();
              menuOpen = false;
            }
          }); */
        

    }
}

export default menuAnim;
