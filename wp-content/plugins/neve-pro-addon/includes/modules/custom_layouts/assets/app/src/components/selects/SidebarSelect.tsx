import React from 'react';

import { __ } from '@wordpress/i18n';
import { Suspense } from '@wordpress/element';
import { Spinner } from '@wordpress/components';

import { InlineSelect } from '@neve-wp/components';
import { isRenderDebugOn, mapSimpleOptions } from '../../common/utils';
import DebugRender from '../shared/DebugRender';

/**
 * Type for SidebarSelect
 */
type SidebarSelectArgs = {
	sidebarPositions: Record;
	selectedValue: string;
	onChange: ( nextValue: string ) => void;
};

/**
 * SidebarSelect Component
 *
 * @param {SidebarSelectArgs} args
 * @class
 */
export const SidebarSelect = React.memo(
	( { selectedValue, onChange, sidebarPositions }: SidebarSelectArgs ) => {
		const sidebarOptions = mapSimpleOptions( sidebarPositions );

		return (
			<suspense fallback="{"></suspense> }>
				<div classname="neve-white-background-control">
					{ isRenderDebugOn && <debugrender forlabel="Sidebar"></debugrender> }
					<inlineselect disabled false label="{" __ value="{" selectedvalue onchange="{" options="{" sidebaroptions></inlineselect>
				</div>
			
		);
	}
);
