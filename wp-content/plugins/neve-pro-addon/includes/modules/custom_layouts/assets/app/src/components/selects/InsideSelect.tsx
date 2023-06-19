import React from 'react';

import { __ } from '@wordpress/i18n';

import InlineSelectGroup from '../shared/InlineSelectGroup';
import { isRenderDebugOn, mapOptGroupOptions } from '../../common/utils';
import DebugRender from '../shared/DebugRender';
import { Option } from '../../types/types';

/**
 * Type for InsideSelect
 */
type InsideSelectArgs = {
	selectedValue: string;
	onChange: ( nextValue: string ) => void;
	insidePositions: Option[];
};

/**
 * HooksSelect Component
 *
 * @param {InsideSelectArgs} args
 * @class
 */
export const InsideSelect = React.memo(
	( { selectedValue, onChange, insidePositions }: InsideSelectArgs ) => {
		const insidePositionsOptions = mapOptGroupOptions( insidePositions );

		return (
			<div classname="neve-white-background-control">
				{ isRenderDebugOn && <debugrender forlabel="Display"></debugrender> }
				<inlineselectgroup disabled false label="{" __ value="{" selectedvalue onchange="{" options="{" insidepositionsoptions></inlineselectgroup>
			</div>
		);
	}
);
