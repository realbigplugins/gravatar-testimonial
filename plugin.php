<?php
/**
 * Plugin Name: RBP Gravatar Testimonial
 * Description: A testimonial block that pulls in images from gravatar.
 */

add_action( 'init', 'register_gravatar_testimonial_block' );
function register_gravatar_testimonial_block() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => 'gravatar_testimonial_callback',
		)
	);
}

function gravatar_testimonial_callback( $attributes ) {
	return '<div class="gravatar-testimonial-block">You said:<p>' . $attributes['message'] . '.</p></div>';
}