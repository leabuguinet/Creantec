<?php
/* Template Name: Service */

get_header();
global $post;

$p1 = get_field('aboutus_paragraph_1');
$p2 = get_field('aboutus_paragraph_2');
$p1img = get_field('aboutus_paragraph_1_img');

?>

<main class="service-page">

    <div class="content">

        <h1>Artisanat du luxe</h1>

        <div class="service-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil sed explicabo aliquid dolore aperiam aspernatur architecto distinctio voluptates ipsum id reprehenderit labore magnam ut sint voluptatibus voluptatum, maxime est.</p>
            
            <!-- <img src="#" /> -->
            
        </div>

        <h2>Nos réalisations</h2>

       <!--  <div class="gallery">

            <div class='item' data-pos='0'><img src='https://source.unsplash.com/qvEI30ydO_w'></div>
            <div class='item' data-pos='1'><img src='https://source.unsplash.com/9KDuSi7dJv4'></div>
            <div class='item' data-pos='2'><img src='https://source.unsplash.com/d5PYB17O9jE'></div>
            <div class='item' data-pos='3'><img src='https://source.unsplash.com/Um9AkOiIDcU'></div>
            <div class='item' data-pos='4'><img src='https://source.unsplash.com/YTk8tO3PGdA'></div>
        </div>
 -->



    </div>

</main>



<?php
get_footer();
