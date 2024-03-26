
import menuAnim from "./menu-anim";
import homeAnim from "./home-anim";
import aboutusAnim from "./aboutus";

let homepage = document.querySelector('#homepage');
let aboutuspage = document.querySelector("#aboutus");


menuAnim.init();


if(homepage){
  homeAnim.init();
}

if (aboutuspage) {
  aboutusAnim.init();
}
