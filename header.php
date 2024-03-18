<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head() ?>
</head>

<body>

    <header id="header">

        
       <nav class="menu-menu-main-container" role="navigation" aria-label="<?php _e('Menu principal', 'text-domain'); ?>">
        <?php
            wp_nav_menu([
                'theme_location' => 'main-menu',
                'container'      => false, // On retire le conteneur généré par WP
            ]);
        ?>
        </nav>


        <nav class="menu-menu-main-container-mobile" role="navigation" aria-label="<?php _e('Menu principal', 'text-domain'); ?>">
            
            <div class="top-bar">
                <?php 	the_custom_logo(); ?>
                <span class="mobile-menu-button">
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                </span>

            </div>


            
            <?php
                wp_nav_menu([
                    'theme_location' => 'main-menu',
                    'container'      => false,
                ]);
            ?>
        </nav>

            


    </header>



  



