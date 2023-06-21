gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const homeAnim = {

    init () {

        /* Animation of blocks */
        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".image-block",
              start: "top 90%",
              //end: "+=400",
              scrub: true,
              markers: false, 
              
            }
          });
          
          tl
          .from(".image-block", {
            opacity: 0.8,
            scale: 0.7,
          })
          
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".section-services",
              start: "top 85%",
              //end: "+=400",
              //scrub: true,
              markers: false, 
              
            }
          });
          
          tl
          .from(".test", {
            opacity: 0.8,
            y: 500,
          })
          
          
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".section-services",
              start: "top 85%",
              //end: "+=400",
              //scrub: true,
              markers: true, 
              
            }
          });
          tl
          .fromTo(".text-block", {
            y: 500,
            duration: 1.5,
          }, {
            y: 0,
          })

        let test = document.querySelector('.text-block');
        let hover = gsap.to(test, {scale: 1.12, duration: 0.3, paused: true, ease: "power1.inOut"});
        test.addEventListener("mouseenter", () => hover.play());
        test.addEventListener("mouseleave", () => hover.reverse());
        

        /* Animation of Icons */
        gsap.utils.toArray(".picto-orange-stroke").forEach(picto => {
            let hover = gsap.fromTo(".picto-orange-stroke", {x: -50, opacity: 0, duration: 0.05, ease: "power1.inOut", stagger: 0.01}, { opacity:1, x: 0, duration: 0.05, stagger: 0.05});
            
        
            let test2 = document.querySelector('.picto-chrono');
            test2.addEventListener("mouseenter", () => hover.play()); 
            test2.addEventListener("mouseleave", () => hover.reverse());
        });
          
    }
}

export default homeAnim;