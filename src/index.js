import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';
import './editor.scss';
import metadata from '../block.json';

registerBlockType( metadata, {
	edit: ( props ) => {
		const {
			attributes: { message, name, company, email },
			setAttributes,
			className,
		} = props;
		const blockProps = useBlockProps();
		return (
			<blockquote { ...blockProps }>
				<RichText
					tagName="p"
					placeholder="Enter Quote"
					className={ className }
					onChange={ ( message ) => setAttributes( { message } ) }
					value={ message }
				/>
				<TextControl
					label={ __( 'Author Name', 'realbigmarketing' ) }
					hideLabelFromVision={ true }
					placeholder={ __( 'Author Name', 'realbigmarketing' ) }
					className="author_name"
					value={ name }
					onChange={ ( name ) =>
						setAttributes( { name } )
					}
				/>
				<TextControl
					label={ __( 'Author Company', 'realbigmarketing' ) }
					hideLabelFromVision={ true }
					placeholder={ __( 'Company', 'realbigmarketing' ) }
					className="author_company"
					value={ company }
					onChange={ ( company ) =>
						setAttributes( { company } )
					}
				/>
				<TextControl
					label={ __( 'Gravatar Email', 'realbigmarketing' ) }
					className="author_email"
					value={ email }
					onChange={ ( email ) =>
						setAttributes( { email } )
					}
				/>
			</blockquote>
		);
	}
} );