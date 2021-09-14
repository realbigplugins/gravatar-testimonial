<?php
/**
 * Plugin Name: New Dynamic Block
 * Description: An example block that shows how to register a dynamic block in a single file, block.json.
 */

add_action( 'init', 'register_new_dynamic_block' );
function register_new_dynamic_block() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => 'new_dynamic_callback',
		)
	);
}

function new_dynamic_callback( $attributes ) {
	return '<div class="new-dynamic-block">You said:<p>' . $attributes['message'] . '.</p></div>';
}