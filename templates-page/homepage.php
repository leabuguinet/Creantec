
<?php
/* Template Name: Home */

get_header();
global $post;

$slider = get_field('slider');

$sectionServices = get_field('servicesSection');
?>

<main class="" id="">

  <div class="swiper-container swiper-scale-effect">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">

    <div class="swiper-text">Créateur de visibilité</div>
        <!-- Slides -->
      <div class="swiper-slide">
        <div class="slide1 swiper-slide-cover" style="background-image: url(<?php echo $slider['sliderimg'] ?>);"></div>
        <!-- <div>Slide 1</div> -->
      </div>

      <div class="swiper-slide">
        <div class="slide2 swiper-slide-cover" style="background-image: url(<?php echo $slider['sliderimg2'] ?>);"></div>
        <div>Slide 2</div>
      </div>

      <div class="swiper-slide">
        <div class="slide3 swiper-slide-cover" style="background-image: url(<?php echo $slider['sliderimg3'] ?>);"></div>
        <div>Slide 3</div>
      </div>

      <div class="swiper-slide">
        <div class="slide4 swiper-slide-cover" style="background-image: url(<?php echo $slider['sliderimg4'] ?>);"></div>
        <div>Slide 4></div>
      </div>

    </div>

    
  </div>

</div>

<div class="section section-services">
  <h2><?php echo $sectionServices['servicesTitle']?></h2>
    
  <div class="section-blocs">
    <div class="bloc image-bloc" style="background-image: url(<?php echo $sectionServices['servicesImg'] ?>);"></div>
    <div class="bloc text-bloc">

    </div>

  </div>


<div>


<h2>Nos références</h2>

<h2>Qui sommes-nous ?</h2>

</main>



    
<?php
get_footer();

