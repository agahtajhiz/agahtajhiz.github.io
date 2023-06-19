import React from 'react';

import { __ } from '@wordpress/i18n';

import NumberInput, { NumberInputArgs } from '../shared/NumberInput';
import { isRenderDebugOn } from '../../common/utils';
import DebugRender from '../shared/DebugRender';

/**
 * InsideNumberInput Component
 *
 * @param {NumberInputArgs} args
 * @class
 */
const NumberInputComponent = React.memo(
	( { label, defaultValue, value, onChange, max }: NumberInputArgs ) => {
		return (
			<div classname="neve-white-background-control">
				{ isRenderDebugOn && (
					<debugrender forlabel="{" label || __></debugrender>
				) }
				<numberinput label="{" || __ defaultvalue="{" value="{" onchange="{" max="{"></numberinput>
			</div>
		);
	}
);

export default NumberInputComponent;
