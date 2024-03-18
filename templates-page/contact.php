<?php
/* Template Name: Contact */

get_header();
global $post;

$p1 = get_field('aboutus_paragraph_1');
$p2 = get_field('aboutus_paragraph_2');
$p1img = get_field('aboutus_paragraph_1_img');
$sectionContact = get_field('contactSection');
?>

<main class="contact-page">

    <div class="content">

        <h1>Contactez-nous</h1>

        <div class="contact-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil sed explicabo aliquid dolore aperiam aspernatur architecto distinctio voluptates ipsum id reprehenderit labore magnam ut sint voluptatibus voluptatum, maxime est.</p>
            
            <!-- <img src="#" /> -->
            
        </div>

        <div class="section section-contact">
    <div class="content">
      <div class="section-blocks type2">
     
        <div class="block text-block">
          <h3>Nous contacter</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos non, eveniet voluptates facilis optio voluptas voluptatibus dolores quas possimus vitae aut ea ipsum libero ut! Nobis architecto ullam aut.</p>
          <button>Contactez-nous</button>
        </div>
      </div>

    </div>
  </div>



    </div>

</main>



<?php
get_footer();
