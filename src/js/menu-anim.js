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
        
        tl
        .to(".menu-menu-main-container", {
           //opacity: 0,
           //'--main-bg-color': "blue",
           //position: 'fixed',
           boxShadow: '0px 48px 100px 0px rgba(17, 12, 46, 0.15)',
        })

  }
}

export default menuAnim;
