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

	<blockquote class="gravatar-testimonial-block">

		<p class="gravatar-testimonial-block__quote"><?php echo $attributes['message'] ?></p>

		<?php if ( $attributes['email'] || $attributes['name'] || $attributes['company'] ) : ?>
			<div class="gravatar-testimonial-block__author">

				<?php if ( $attributes['email'] ) : ?>
					<?php echo get_avatar( $attributes['email'], 80, null, false ); ?>
				<?php endif; ?>

				<?php if ( $attributes['name'] || $attributes['company'] ) : ?>
					<p>
						<?php if ( $attributes['name'] ) : ?>
							<span class="gravatar-testimonial-block__name"><?php echo $attributes['name'] ?></span>
						<?php endif; ?>
						<?php if ( $attributes['company'] ) : ?>
							<span class="gravatar-testimonial-block__company">, <?php echo $attributes['company'] ?></span>
						<?php endif; ?>
					</p>
				<?php endif; ?>
				
			</div>
		<?php endif; ?>

	</blockquote>

	<?php
	$html = ob_get_clean();
	return $html;
}