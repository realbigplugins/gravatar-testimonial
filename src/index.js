import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';
import './editor.scss';
import metadata from '../block.json';

import Gravatar from 'react-gravatar';

registerBlockType( metadata, {
	edit: ( props ) => {
		const {
			attributes: { message, name, company, email },
			setAttributes,
			className,
		} = props;
		const blockProps = useBlockProps();
		return (
			<figure  { ...blockProps }>
				<div class="testimonial">
					<InspectorControls key="setting">
						<PanelBody>

							<TextControl
								label={ __( 'Gravatar Email', 'realbigmarketing' ) }
								className="author_email"
								value={ email }
								onChange={ ( email ) =>
									setAttributes( { email } )
								}
							/>

						</PanelBody>
					</InspectorControls>
					<div class="testimonial-container">
						<div class="testimonial-top row small-collapse">
							<div class="small-9 columns testimonial-meta">

								<Gravatar 
									email={ email } 
									size="96"
									className="avatar alignleft"
								/>

								<figcaption>

									<h6 class="testimonial-name">
										<TextControl
											label={ __( 'Author Name', 'realbigmarketing' ) }
											hideLabelFromVision={ true }
											placeholder={ __( 'Author Name', 'realbigmarketing' ) }
											value={ name }
											onChange={ ( name ) =>
												setAttributes( { name } )
											}
										/>
									</h6>

									<cite class="testimonial-company">
										<TextControl
											label={ __( 'Author Company', 'realbigmarketing' ) }
											hideLabelFromVision={ true }
											placeholder={ __( 'Company', 'realbigmarketing' ) }
											value={ company }
											onChange={ ( company ) =>
												setAttributes( { company } )
											}
										/>
									</cite>

								</figcaption>
							</div>
							<div class="small-3 columns testimonial-quotation-mark">
								<span class="fa fa-4x fa-quote-left"></span>
							</div>
						</div>
						<div class="testimonial-bottom row small-collapse">
							<div class="small-12 columns testimonial-content">
								<blockquote>
									<RichText
										tagName="p"
										placeholder="Enter Quote"
										className={ className }
										onChange={ ( message ) => setAttributes( { message } ) }
										value={ message }
									/>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</figure>
		);
	}
} );