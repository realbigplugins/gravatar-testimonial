import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';
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
					className={ className }
					onChange={ ( message ) => setAttributes( { message } ) }
					value={ message }
				/>
				<TextControl
					label={ __( 'Name', 'realbigmarketing' ) }
					value={ name }
					onChange={ ( name ) =>
						setAttributes( { name } )
					}
				/>
				<TextControl
					label={ __( 'Company', 'realbigmarketing' ) }
					value={ company }
					onChange={ ( company ) =>
						setAttributes( { company } )
					}
				/>
				<TextControl
					label={ __( 'Email', 'realbigmarketing' ) }
					value={ email }
					onChange={ ( email ) =>
						setAttributes( { email } )
					}
				/>
			</blockquote>
		);
	}
} );