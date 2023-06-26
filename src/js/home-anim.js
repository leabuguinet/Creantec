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
              markers: false, 
              
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
        

        /* Animation of Icons card list */

        gsap.utils.toArray(".picto-block").forEach(pictoblock => {
          let pictoBlocks = gsap.fromTo(".picto-list", {x: -50, opacity: 0, duration: 0.08, ease: "power1.inOut", stagger: 0.01}, { opacity:1, x: 0, duration: 0.05, stagger: 0.05});
          
      });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".picto-list",
          start: "top 60%",
          //end: "+=400",
          //scrub: true,
          markers: true, 
          
        }
      });
      
      tl
      .from(".picto-block", {
        opacity: 0.8,
        y: 500,
        duration: 1,
        stagger: 0.2,
        ease: "Power2.easeOut"
      })


        /* Animation of Icons */

        //Chrono Icon
        gsap.utils.toArray(".picto-orange-stroke").forEach(picto => {
            let hoverChrono = gsap.fromTo(".picto-orange-stroke", {x: -50, opacity: 0, duration: 0.08, ease: "power1.inOut", stagger: 0.01}, { opacity:1, x: 0, duration: 0.05, stagger: 0.05});
            
        
            let pictoChrono = document.querySelector('.reactivity');
            pictoChrono.addEventListener("mouseenter", () => hoverChrono.restart()); 
            pictoChrono.addEventListener("mouseleave", () => hoverChrono.kill());
        });

      //Handshake Icon 
      
      let pictoHands = document.querySelector('.relation');
      let hoverHandshake =  gsap.timeline({paused: true, repeat:-1});

      hoverHandshake.to(".picto-hands", {y: -25, duration: 0.6, ease: "ease.out"})
      .to(".picto-hands", {y: 0, duration: 0.5, ease: "ease.out"})
      .to(".picto-hands", {y: -10, duration: 0.5, ease: "ease.out"})
      .to(".picto-hands", {y: 0, duration: 0.3, ease: "ease.out"})

      pictoHands.addEventListener("mouseenter", () => hoverHandshake.play()); 

      pictoHands.addEventListener("mouseleave", () => {
          hoverHandshake.pause();

          let hoverHandshakeOut =  gsap.timeline({paused: true/* , repeat:-1 */});
          hoverHandshakeOut.to(".picto-hands", {y: 0, duration: 0.6, ease: "ease.out"})
          hoverHandshakeOut.play();
        }); 
    

        //Lightbulb Icon
        gsap.utils.toArray(".light-move-rtl").forEach(picto => {
          let hoverLight = gsap.fromTo(".light-move-rtl", {x: 5, opacity: 0, ease: "power1.inOut", stagger: 0.01}, { opacity:1, x: 0, duration: 0.3, stagger: 0.05});


          let pictoLight = document.querySelector('.innovation');
          pictoLight.addEventListener("mouseenter", () => hoverLight.restart());
            
          pictoLight.addEventListener("mouseleave", () => hoverLight.kill());
        });
          gsap.utils.toArray(".light-move-ltr").forEach(picto2 => {
            let hoverLight2 = gsap.fromTo(".light-move-ltr", {x: -5, opacity: 0, ease: "power1.inOut", stagger: 0.01}, { opacity:1, x: 0, duration: 0.3, stagger: 0.05});

            let pictoLight = document.querySelector('.innovation');
            pictoLight.addEventListener("mouseenter", () => hoverLight2.restart());
              
            pictoLight.addEventListener("mouseleave", () => hoverLight2.kill());

          });

          //Pencil Icon 

          let pictoPencil = document.querySelector('.conception');
          let hoverPencil =  gsap.timeline({paused: true, repeat:0});

      hoverPencil.to(".picto-pencil", {rotate: -360, duration: 0.6, ease: "ease.out"})
  
      pictoPencil.addEventListener("mouseenter", () => hoverPencil.restart()); 
      pictoPencil.addEventListener("mouseleave", () => hoverPencil.kill());
    
        

  }
}

export default homeAnim;