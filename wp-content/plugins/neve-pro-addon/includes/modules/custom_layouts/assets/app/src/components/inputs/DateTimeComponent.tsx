import React from 'react';
import {
	Button,
	DatePicker,
	DateTimePicker,
	TimePicker,
	Flex,
	FlexItem,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { isRenderDebugOn } from '../../common/utils';
import DebugRender from '../shared/DebugRender';

/**
 * DateTime custom Component
 *
 * @param {DateTimePicker.Props} args
 * @class
 */
const DateTimeComponent = React.memo(
	( {
		currentDate,
		onChange,
	}: {
		currentDate: string;
		onChange: ( value: string ) => void;
	} ) => {
		const [ isVisible, setIsVisible ] = useState( false );

		const toggleVisible = () => {
			setIsVisible( ! isVisible );
			if ( currentDate ) {
				onChange( currentDate );
			}
		};

		return (
			<div classname="neve-white-background-control">
				{ isRenderDebugOn && <debugrender forlabel="Date"></debugrender> }
				<timepicker currenttime="{" currentdate onchange="{" is12hour="{" false></timepicker>
				{ isVisible && (
					<datepicker currentdate="{" onchange="{"></datepicker>
				) }

				<flex gap="{" align="center" justify="space-between">
					<flexitem>
						<button type="button" classname="components-button components-datetime__date-show-hide-calendar-button is-link" onclick="{" togglevisible>
							{ isVisible
								? __( 'Hide calendar', 'neve' )
								: __( 'Show calendar', 'neve' ) }
						</button>
					</flexitem>
					<flexitem>
						<button classname="components-button components-datetime__date-reset-button is-link" onclick="{"> onChange( '' ) }
						>
							{ __( 'Reset', 'neve' ) }
						</button>
					</flexitem>
				</flex>
			</div>
		);
	}
);

export default DateTimeComponent;
