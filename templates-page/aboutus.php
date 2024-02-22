<?php
/* Template Name: About us */

get_header();
global $post;

$p1 = get_field('aboutus_paragraph_1');
$p2 = get_field('aboutus_paragraph_2');
$p1img = get_field('aboutus_paragraph_1_img');

?>

<main class="" id="aboutus">

    <div class="content">

        <h1>Créantec c'est avant tout...</h1>

        <section>

            <p>Création </p>
            <p>Équipe de designer</p>
            <p>Relation cleint = priorité, urgence, qualité</p>
            <p>Made in france</p>
            <p>Écologie</p>

        </section>
    </div>
        <div class="section-divider col-3 ss-style-invertedrounded">
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
        </div>

    <div class="section-savoirfaire">
    <div class="content">
 
        <h2>Notre savoir-faire</h2>

        <section>
            <p>Création & Design</p>
            <p>Conception & Innovation</p>
            <p>Multi-matériaux - lumière - électronique</p>
            <p>Qualité : certification, conformité, normes</p>
            <p>Relation client : urgence, logistique</p>

        </section>

    </div>
    </div>
        <div class="section-divider col-2 color ss-style-roundedsplit">
            <div class="column text">
            </div>
        </div>

    <div class="content">
        <h2>Notre histoire</h2>

        <section class="section-2003">

            <h3>2003</h3>

            <div class="paragraph-block  paragraph1">
                <p>
                    <?php echo $p1 ?>
                </p>
                <div class="paragraph-img" style="background-image: url(<?php echo $p1img ?>);"></div>
            </div>



        </section>

        <section class="section-2023">

            <h3>2023</h3>


            <div class="paragraph-block paragraph2">
                <p>
                    <?php echo $p2 ?>
                </p>
            </div>

            <a href='#'>Créantec US</a>


        </section>

    </div>

</main>



<?php
get_footer();
