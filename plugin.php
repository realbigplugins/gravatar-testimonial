<?php
/**
 * Plugin Name: RBP Gravatar Testimonial
 * Description: A testimonial block that pulls in images from gravatar.
 * Version: 0.1.0
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
	ob_start();
	?>

	<figure class="wp-block-realbigplugins-gravatar-testimonial">

		<blockquote><?php echo esc_html( $attributes['message'] ) ?></blockquote>

		<?php if ( $attributes['email'] || $attributes['name'] || $attributes['company'] ) : ?>
			<figcaption>

				<?php if ( $attributes['email'] ) : ?>
					<?php echo get_avatar( $attributes['email'], 80, null, false ); ?>
				<?php endif; ?>

				<?php if ( $attributes['name'] || $attributes['company'] ) : ?>
					<cite>
						<?php
						if ( $attributes['name'] ) :
							echo '<span class="gravatar-testimonial-name">' . esc_html( $attributes['name'] ) . '</span>';
						endif;
						
						if ( $attributes['company'] ) :
							echo ', <span class="gravatar-testimonial-company">' . esc_html( $attributes['company'] ) . '</span>';
						endif;
						?>
					</cite>
				<?php endif; ?>

			</figcaption>
		<?php endif; ?>

	</figure>

	<?php
	$html = ob_get_clean();
	return $html;
}