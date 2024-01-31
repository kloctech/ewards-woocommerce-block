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
    wp_localize_script('test-block-scripts-front','PRDOUCTION_VAR',array(
        "PRDOUCTION_URL" => "https://fed0-106-51-177-195.ngrok-free.app"
    ));
    // wp_enqueue_style('test-block-style-front', plugin_dir_url(__FILE__) . 'node_modules/@wordpress/components/build-style/style.css');
    wp_enqueue_style('test-block-style-front-v2', plugin_dir_url(__FILE__) . 'build/style-front.css');
    // wp_enqueue_style('test-block-style-front-v2', plugin_dir_url(__FILE__) . 'build/style.css');
}
/**
* register fields Validating.
*/
function wooc_extra_register_fields() {?>
    <p class="form-row form-row-first">
        <label for="reg_billing_first_name"><?php _e( 'First name', 'woocommerce' ); ?><span class="required">*</span></label>
        <input type="text" class="input-text" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) esc_attr_e( $_POST['billing_first_name'] ); ?>" />
    </p>
    <p class="form-row form-row-last">
        <label for="reg_billing_last_name"><?php _e( 'Last name', 'woocommerce' ); ?><span class="required">*</span></label>
        <input type="text" class="input-text" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) esc_attr_e( $_POST['billing_last_name'] ); ?>" />
    </p>
    <p class="form-row form-row-wide">
    <label for="reg_billing_phone"><?php _e( 'Mobile', 'woocommerce' ); ?><span class="required">*</span></label>
    <input type="text" class="input-text" name="billing_phone" id="reg_billing_phone" value="<?php if ( ! empty( $_POST['billing_phone'] ) ) esc_attr_e( $_POST['billing_phone'] ); ?>" />
    </p>
    <div class="clear"></div>
   <?php
}

/**

* register fields Validating.

*/

function wooc_validate_extra_register_fields( $username, $email,$validation_errors) {
    if ( isset( $_POST['billing_first_name'] ) && empty( $_POST['billing_first_name'] ) ) {
        $validation_errors->add( 'billing_first_name_error', __( '<strong>Error</strong>: First name is required!', 'woocommerce' ) );
    }
    if ( isset( $_POST['billing_phone'] ) ) {
        $hasPhoneNumber= get_users('meta_value='.$_POST['billing_phone']);
        if ( !empty($hasPhoneNumber)) {
          $validation_errors->add( 'billing_phone_error', __( 'Mobile number is already used!.', 'woocommerce' ) );
        }
    }
    if ( isset( $_POST['billing_last_name'] ) && empty( $_POST['billing_last_name'] ) ) {
        $validation_errors->add( 'billing_last_name_error', __( '<strong>Error</strong>: Last name is required!.', 'woocommerce' ) );
    }
    if ( isset( $_POST['billing_phone'] ) && empty( $_POST['billing_phone'] ) ) {
        $validation_errors->add( 'billing_phone_error', __( '<strong>Error</strong>: Mobile number is required!.', 'woocommerce' ) );
    }
    return $validation_errors;
}

/**
* Below code save extra fields.
*/
function wooc_save_extra_register_fields( $customer_id ) {
    if ( isset( $_POST['billing_phone'] ) ) {
                 // Phone input filed which is used in WooCommerce
                 update_user_meta( $customer_id, 'billing_phone', sanitize_text_field( $_POST['billing_phone'] ) );
          }
      if ( isset( $_POST['billing_first_name'] ) ) {
             //First name field which is by default
             update_user_meta( $customer_id, 'first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
             // First name field which is used in WooCommerce
             update_user_meta( $customer_id, 'billing_first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
      }
      if ( isset( $_POST['billing_last_name'] ) ) {
             // Last name field which is by default
             update_user_meta( $customer_id, 'last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
             // Last name field which is used in WooCommerce
             update_user_meta( $customer_id, 'billing_last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
      }
}





// Display the mobile phone field
add_action( 'woocommerce_edit_account_form_start', 'add_billing_mobile_phone_to_edit_account_form' ); // At start
// add_action( 'woocommerce_edit_account_form', 'add_billing_mobile_phone_to_edit_account_form' ); // After existing fields
function add_billing_mobile_phone_to_edit_account_form() {
    $user = wp_get_current_user();
    ?>
     <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label for="reg_billing_phone"><?php _e( 'Mobile phone', 'woocommerce' ); ?> <span class="required">*</span></label>
        <input type="text" class="input-text" name="billing_phone" id="reg_billing_phone" value="<?php echo esc_attr( get_user_meta($user->id,'billing_phone',true) ); ?>" />
    </p>
    <?php
}

// Check and validate the mobile phone
add_action( 'woocommerce_save_account_details_errors','billing_mobile_phone_field_validation', 20, 1 );
function billing_mobile_phone_field_validation( $args ){
    $user = wp_get_current_user();
    if ( isset($_POST['billing_phone']) && empty($_POST['billing_phone']) )
        $args->add( 'billing_phone_error', __( 'Please fill in your Mobile phone', 'woocommerce' ),'');
    // if ( isset( $_POST['billing_phone'] ) ) {
    //     $hasNewPhoneNumber = get_user_meta($user->id,'billing_phone')
    //     $hasPhoneNumber= get_users('meta_value='.$_POST['billing_phone']);
    //     if ( !empty($hasPhoneNumber) && $hasNewPhoneNumber !== $hasPhoneNumber ) {
    //         $args->add( 'billing_phone_error', __( 'Mobile number is already used!.', 'woocommerce' ) );
    //     }
    // }
}

// Save the mobile phone value to user data
add_action( 'woocommerce_save_account_details', 'my_account_saving_billing_mobile_phone', 20, 1 );
function my_account_saving_billing_mobile_phone( $user_id ) {
    if( isset($_POST['billing_phone']) && ! empty($_POST['billing_phone']) )
        update_user_meta( $user_id, 'billing_phone', sanitize_text_field($_POST['billing_phone']) );
}

add_action( 'init', 'test_block' );
add_action( 'wp_enqueue_scripts', 'test_block_front_scipts' );
add_action( 'woocommerce_register_form_start', 'wooc_extra_register_fields' );
add_action( 'woocommerce_register_post', 'wooc_validate_extra_register_fields', 10, 3 );
add_action( 'woocommerce_created_customer', 'wooc_save_extra_register_fields' );