<?php
/*
Plugin Name: test-block
Author: webkul
*/
defined( 'ABSPATH' ) || exit;

function test_block() {
    $styleURI = plugin_dir_url( __FILE__  ).'/src/style.css';

    //Enquee style
    wp_enqueue_style( 
        'test-block-style', 
        $styleURI, 
     );

    // Register JavasScript File build/index.js
    wp_register_script( 
        'Testblock',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
    );
    // Register editor style src/editor.css
    wp_register_style(
        'test-block-editor-style',
        plugins_url( 'src/editor.css', __FILE__ ),
    );
    // Register block
    register_block_type( 'gutenreact/test-block', array(
        'editor_script' => 'Testblock',
        'editor_style' => 'test-block-editor-style',
    ) );
}

function test_block_front_scipts(){
    $asset_file_front = include( plugin_dir_path( __FILE__ ) . 'build/front.asset.php');
    wp_enqueue_script(
		'test-block-scripts-front',
		plugins_url( 'build/front.js', __FILE__ ),
		$asset_file_front['dependencies'],
		$asset_file_front['version']
	);
    // wp_enqueue_style('test-block-style-front', plugin_dir_url(__FILE__) . 'node_modules/@wordpress/components/build-style/style.css');
    wp_enqueue_style('test-block-style-front-v2', plugin_dir_url(__FILE__) . 'build/style-front.css');
}
add_action( 'init', 'test_block' );
add_action( 'wp_enqueue_scripts', 'test_block_front_scipts' );