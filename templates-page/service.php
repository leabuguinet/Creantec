<?php
/* Template Name: Service */

get_header();
global $post;

$serviceTitle = get_field('service_description')['service_title'];
$serviceText = get_field('service_description')['service_text'];
$serviceImg = get_field('service_description')['service_img'];
$gallery = get_field('gallery');
$gallerySubtitle = get_field('gallery_subtitle');
$sectionContact = get_field('contact_section');
?>

<main class="service-page">

    <div class="section-service">
        <div class="content">

            <h1><?php echo get_the_title() ?></h1>

            <div class="service-description">

                <div class="service-text">
                    <h2><?php echo $serviceTitle ?></h2>
                    <p><?php echo $serviceText ?></p>
                </div>

                <div class="service-img">
                    <img src="<?php echo $serviceImg ?>" alt="">
                </div>


            </div>

            <div class="service-plus">
                <div class="service-img">
                    <img src="<?php echo $serviceImg ?>" alt="">
                </div>
                <div class="service-plus-text">
                    <h2>Le + de Créantec</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora illum iste tempore, quis minus exercitationem, ipsam voluptate molestiae quasi odit qui quam facilis recusandae corrupti id a! Eaque, obcaecati.</p>
                </div>

            </div>

        </div>
    </div>

    <div class="section-divider col-3 ss-style-invertedrounded"></div>

    <div class="section-gallery">
        <div class="content">

            <h2>Nos réalisations</h2>
            <h3><?php echo $gallerySubtitle ?></h3>
        </div>
        <div class="gallery">

            <?php
            for ($i = 1; $i <= count($gallery); $i++) {
            ?>
                <div class="gallery-item">
                    
                    <img src="<?php echo $gallery["item_{$i}"]["image_{$i}"] ?>" alt="">

                    <?php if($gallery["item_{$i}"]["image_{$i}_brand"] !== "") {
                        
                      echo "<span class='title'>" . $gallery['item_'. $i ]['image_' . $i . '_brand']  ?></span>
                    
                    <?php }?>

                    <?php if($gallery["item_{$i}"]["image_{$i}_description"] !== "") {

                        echo "<span class='text'>" . $gallery['item_'. $i ]['image_' . $i . '_description'] ?></span>

                    <?php }?>
                </div>

            <?php } ?>

        </div>
    </div>

    <div class="section-contact">

        <div class="content">

            <h2>Contactez-nous dès aujourd'hui</h2>
            <div class="section-blocks type2">

                <div class="block text-block">
                    <h3><?php echo $sectionContact['contact_title'] ?></h3>
                    <p><?php echo $sectionContact['contact_text'] ?></p>
                    <button>Contactez-nous</button>
                </div>
                
            </div>
        </div>

    </div>

</main>



<?php
get_footer();
