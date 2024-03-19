<?php
/* Template Name: Service */

get_header();
global $post;

$serviceTitle = get_field('service_description')['service_title'];
$serviceText = get_field('service_description')['service_text'];
$serviceImg = get_field('service_description')['service_img'];
$gallery = get_field('gallery');
$gallerySubtitle = get_field('gallery_subtitle')
?>

<main class="service-page">

    <div class="content">

        <h1>Artisanat du luxe</h1>

        <div class="service-description">

            <div class="service-text">
                <h2><?php echo $serviceTitle ?></h2>
            <p><?php echo $serviceText ?></p>           
            </div>

            <div class="service-img">
                <img src="<?php echo $serviceImg ?>" alt="">
            </div>
            

        </div>

</div>
        <div class="section-divider col-3 ss-style-invertedrounded"></div>

        <div class="section-gallery">
            <div class="content">

                <h2>Nos réalisations</h2>
                <h3><?php echo $gallerySubtitle ?></h3>

            <div class="gallery">

                <?php
                for ($i=1; $i <= count($gallery) ; $i++) { 
                
                ?>

                <div class="gallery-item">
                <img src="<?php echo $gallery["image_{$i}"]?>" alt="">
                <span class="title">Lorem ipsum dolor</span>
                <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                </div>

                <?php } ?>

            
            </div>
        </div>


    </div>

</main>



<?php
get_footer();
