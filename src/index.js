import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import metadata from '../block.json';

registerBlockType( metadata, {
	edit: ( props ) => {
		const {
			attributes: { message },
			setAttributes,
			className,
		} = props;
		const blockProps = useBlockProps();
		return (
			<div { ...blockProps }>
				<RichText
					tagName="p"
					className={ className }
					onChange={ ( message ) => setAttributes( { message } ) }
					value={ message }
				/>
			</div>
		);
	}
} );