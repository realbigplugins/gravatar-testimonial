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

	<figure class="testimonial">
		<div class="testimonial-container">
				<div class="testimonial-top row">
					<div class="small-9 columns testimonial-meta">

						<?php echo get_avatar( $attributes['email'], 96, null, false, array(
							'class' => 'alignleft',
						) ); ?>

						<figcaption>

							<h6 class="testimonial-name">
								<?php echo esc_html( $attributes['name'] ); ?>
							</h6>

							<cite class="testimonial-company">
								<?php echo esc_html( $attributes['company'] ); ?>
							</cite>

						</figcaption>

					</div>

					<div class="small-3 columns testimonial-quotation-mark">
						<span class="fa fa-4x fa-quote-left"></span>
					</div>

				</div>

				<div class="testimonial-bottom row">

					<div class="small-12 columns testimonial-content">
						<blockquote>
							<?php echo do_shortcode( wpautop( $attributes['message'] ) ); ?>
						</blockquote>
					</div>

				</div>

			</blockquote>
		</div>
	</figure>

	<?php
	$html = ob_get_clean();
	return $html;
}