import React from 'react';

import { __ } from '@wordpress/i18n';

import InlineSelectGroup from '../shared/InlineSelectGroup';
import { isRenderDebugOn, mapOptGroupOptions } from '../../common/utils';
import DebugRender from '../shared/DebugRender';
import { Option } from '../../types/types';

/**
 * Type for HooksSelect
 */
type HooksSelectArgs = {
	selectedValue: string;
	onChange: ( nextValue: string ) => void;
	hooks: Option[];
};

/**
 * HooksSelect Component
 *
 * @param {HooksSelectArgs} args
 * @class
 */
export const HooksSelect = React.memo(
	( { selectedValue, onChange, hooks }: HooksSelectArgs ) => {
		const hooksOptions = mapOptGroupOptions( hooks, true ) as Option[];

		return (
			<div classname="neve-white-background-control">
				{ isRenderDebugOn && <debugrender forlabel="Hooks"></debugrender> }
				<inlineselectgroup disabled false label="{" __ value="{" selectedvalue onchange="{" options="{" hooksoptions></inlineselectgroup>
			</div>
		);
	}
);
