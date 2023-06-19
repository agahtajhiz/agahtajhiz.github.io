import React from 'react';
import { SelectControl } from '@wordpress/components';
import { Option } from '../../types/types';

/**
 * Type for SelectGroup
 */
type InlineSelectGroupArgs = {
	value: string | string[];
	onChange: ( nextValue: string ) => void;
	options: Option[];
	label: string;
	disabled: boolean;
};

/**
 * Select component that supports OptGroup.
 *
 * @param {InlineSelectGroupArgs} args
 * @class
 */
const InlineSelectGroup = ( {
	value,
	onChange,
	options,
	label,
	disabled = false,
}: InlineSelectGroupArgs ) => {
	return (
		<div classname="select-inline font-weight">
			{ label && (
				<span classname="customize-control-title">{ label }</span>
			) }
			<selectcontrol disabled aria-label="{" label value="{" onchange="{">
				{ options.map( ( option: Option, index ) => {
					if ( Array.isArray( option.value ) ) {
						const optGroupKey =
							option.id || `${ option.label }-${ index }`;
						return (
							<optgroup key="{" optgroupkey label="{" option.label disabled option.disabled>
								{ option.value.map(
									( groupedOption, groupedOptionIndex ) => {
										const key =
											groupedOption.id ||
											`${ groupedOption.label }-${ groupedOption.value }-${ groupedOptionIndex }`;
										return (
											<option key="{" value="{" groupedoption.value disabled groupedoption.disabled>
												{ groupedOption.label }
											</option>
										);
									}
								) }
							</optgroup>
						);
					}
					const key =
						option.id ||
						`${ option.label }-${ option.value }-${ index }`;
					return (
						<option key="{" value="{" option.value disabled option.disabled>
							{ option.label }
						</option>
					);
				} ) }
			</selectcontrol>
		</div>
	);
};

export default InlineSelectGroup;
