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

    
        <?php
 


        wp_nav_menu(); 
        
        ?>
 
        <div class="bmenu">
            
        </div>

<!--         <nav role="navigation" aria-label="<?php esc_html_e( 'Menu principal', 'text-domain' ); ?>">
            <button type="button" aria-expanded="false" aria-controls="primary-menu" class="menu-toggle">
                <?php esc_html_e( 'Menu', 'text-domain' ); ?>
            </button>
            <?php
            wp_nav_menu([
                'theme_location' => 'main-menu',
                'container'      => false,
                'menu_id'        => 'primary-menu',
            ]);
            ?>
        </nav> -->
    </header>



  



