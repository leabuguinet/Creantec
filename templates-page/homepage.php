
<?php
/* Template Name: Home */

get_header();
global $post;


$sliderImg1 = get_field('sliderimg1');
$sliderImg2 = get_field('sliderimg2');
$sliderImg3 = get_field('sliderimg3');
$sliderImg4 = get_field('sliderimg4');
?>

<main class="" id="">

    <div class="swiper-container swiper-scale-effect">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
      <div class="slide1 swiper-slide-cover" style="background-image: url(<?php echo $sliderImg1 ?>);"></div>
      <!-- <div>Slide 1</div> -->

    </div>
    <div class="swiper-slide">
      <div class="slide2 swiper-slide-cover" style="background-image: url(<?php echo $sliderImg2 ?>);"></div>
      <div>Slide 2</div>
    </div>
    <div class="swiper-slide">
      <div class="slide3 swiper-slide-cover" style="background-image: url(<?php echo $sliderImg3 ?>);"></div>
      <div>Slide 3</div>
    </div>
    <div class="swiper-slide">
      <div class="slide4 swiper-slide-cover" style="background-image: url(<?php echo $sliderImg4 ?>);"></div>
      <div>Slide 4></div>
    </div>
    </div>

</div>

</main>



    
<?php
get_footer();

