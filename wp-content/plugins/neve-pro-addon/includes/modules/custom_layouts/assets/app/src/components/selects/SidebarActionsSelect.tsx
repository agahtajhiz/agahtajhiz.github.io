import React from 'react';

import { __ } from '@wordpress/i18n';
import { Suspense } from '@wordpress/element';
import { Spinner, SelectControl } from '@wordpress/components';

import { isRenderDebugOn, mapSimpleOptions } from '../../common/utils';
import DebugRender from '../shared/DebugRender';

/**
 * Type for SidebarActionsSelect
 */
type SidebarActionsSelectArgs = {
	sidebarActions: Record;
	selectedValue: string;
	onChange: ( nextValue: string ) => void;
};

/**
 * SidebarActionsSelect Component
 *
 * @param {SidebarActionsSelectArgs} args
 * @class
 */
export const SidebarActionsSelect = React.memo(
	( {
		selectedValue,
		onChange,
		sidebarActions,
	}: SidebarActionsSelectArgs ) => {
		const sidebarActionsOptions = mapSimpleOptions( sidebarActions, true );

		const label = __( 'Action', 'neve' );
		return (
			<suspense fallback="{"></suspense> }>
				<div classname="neve-white-background-control">
					{ isRenderDebugOn && <debugrender forlabel="Actions"></debugrender> }
					<div classname="select-inline font-weight">
						{ label && (
							<span classname="customize-control-title">
								{ label }
							</span>
						) }
						<selectcontrol disabled false aria-label="{" label value="{" selectedvalue onchange="{" options="{" sidebaractionsoptions help="{" sidebaractions ||></selectcontrol>
					</div>
				</div>
			
		);
	}
);
