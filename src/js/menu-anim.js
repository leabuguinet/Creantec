gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(toggleClass)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const menuAnim = {

    init () {

      
        let menuItemWithChildren = document.querySelectorAll('.menu-item-has-children');

        if(menuItemWithChildren){

          var tlmenu = gsap.timeline({
            paused: true
          }); 

          tlmenu.fromTo(".sub-menu .menu-item", {
            y: -50,
            duration: 2.2
          },
          {
            opacity: 1,
            duration: 0.5,
            y: 0,
          })

          for(let p = 0; p < menuItemWithChildren.length; p++){
            
            menuItemWithChildren[p].addEventListener('mouseenter', () => {
              menuItemWithChildren[p].classList.add('TEST');
              tlmenu.play();
            })

            menuItemWithChildren[p].addEventListener('mouseleave', () => {
              menuItemWithChildren[p].classList.remove('TEST');
              tlmenu.reverse();
            })
            
          }



        }

        /* Animation of the mobile menu */

    
        let mobileMenu = document.querySelector(".mobile-menu-button");
        let mobileMenuLink = document.querySelector(".menu-menu-main-container-mobile");

        /* mobileMenu.addEventListener('click', () => {
          mobileMenu.classList.toggle('toggle')
        }) */



        var tlmenumobile= gsap.timeline({
          paused: true
        });
     
        tlmenumobile.to(".menu-menu-main-container-mobile", {
          opacity: 0.8,
          height: '100vh',
          
        });
      
          mobileMenu.addEventListener('click', () => {
          
            mobileMenu.classList.toggle('toggle');
            mobileMenuLink.classList.toggle('mobilemenu-open');

            if(mobileMenu && mobileMenu.classList.contains('toggle') === false) {

              tlmenumobile.reverse();

            } else {
              tlmenumobile.play();
            }


          })
        
    }
}

export default menuAnim;
