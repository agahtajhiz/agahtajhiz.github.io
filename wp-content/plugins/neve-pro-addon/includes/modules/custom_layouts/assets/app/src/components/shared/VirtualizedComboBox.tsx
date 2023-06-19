import React, { Component, KeyboardEventHandler } from 'react';

import removeAccents from 'remove-accents';
import classnames from 'classnames';

import {
	withFocusOutside,
	BaseControl,
	Flex,
	FlexItem,
} from '@wordpress/components';

import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { speak } from '@wordpress/a11y';

// @ts-ignore
import { FixedSizeList as List } from 'react-window';

import { chevronDown, chevronUp, Icon } from '@wordpress/icons';
import { useInstanceId } from '@wordpress/compose';

export type Option = {
	label: string;
	value: string | number;
	isGroupLabel?: boolean;
	isSubGroup?: boolean;
};

/**
 * Extend the base Component to hook the `onFocusOutside` function.
 */
const DetectOutside = withFocusOutside(
	// @ts-ignore
	class extends Component {
		handleFocusOutside( event: Event ) {
			// @ts-ignore
			this.props.onFocusOutside( event );
		}

		render() {
			return this.props.children;
		}
	}
);

/**
 * RowProps Type
 */
type RowProps = {
	index: number;
	style: React.CSSProperties;
	data: {
		onChange: ( nextValue: string | number ) => void;
		options: Option[];
		focusedItemIndex: number;
		query: string;
		id: string;
	};
};

/**
 * The Row component for the list items,
 *
 * @param {RowProps} args
 * @class
 */
const Row = ( { index, style, data }: RowProps ) => {
	const { id, options, onChange, focusedItemIndex, query } = data;
	const [ isFocused, setIsFocus ] = useState( false );

	let label = options[ index ].label;
	const isGroupLabel = options[ index ].isGroupLabel || false;
	if ( isGroupLabel ) {
		return (
			<button id="{" index classname="components-form-token-field__suggestion" type="button" style="https://agahtajhiz.github.io/wp-content/plugins/neve-pro-addon/includes/modules/custom_layouts/assets/app/src/components/shared/{" ...style background: color: border: padding: textalign: cursor:>
				<strong>{ label }</strong>
			</button>
		);
	}

	if ( query.length > 3 ) {
		label = label.replace(
			new RegExp( `(${ query })`, 'gi' ),
			'<strong>$1</strong>'
		);
	}
	const padding = options[ index ]?.isSubGroup ? 24 : 8;

	return (
		<button id="{" index classname="{" classnames isfocused type="button" style="https://agahtajhiz.github.io/wp-content/plugins/neve-pro-addon/includes/modules/custom_layouts/assets/app/src/components/shared/{" ...style background: focuseditemindex || : color: border: padding: padding textalign: textoverflow: overflowx: whitespace: onclick="{"> {
				onChange( options[ index ].value );
			} }
			onFocus={ () => setIsFocus( true ) }
			onBlur={ () => setIsFocus( false ) }
			onMouseOver={ () => setIsFocus( true ) }
			onMouseOut={ () => setIsFocus( false ) }
			dangerouslySetInnerHTML={ { __html: label } }
		/>
	);
};

/**
 * VirtualizedComboBoxProps Type
 */
type VirtualizedComboBoxProps = {
	value: string | number;
	onChange: ( nextValue: string ) => void;
	options: Option[];
	label?: string;
	messages?: { selected: string };
	setQueryOpt?: ( value: string ) => void;
	queryOpt?: string;
	dynamicQuery?: boolean;
};

/**
 * VirtualizedComboBox Component
 *
 * @param {VirtualizedComboBoxProps} args
 * @class
 */
const VirtualizedComboBox = React.memo(
	( {
		value,
		onChange,
		options,
		label = '',
		messages = {
			selected: __( 'Item selected.', 'neve' ),
		},
		queryOpt = '',
		setQueryOpt,
		dynamicQuery = false,
	}: VirtualizedComboBoxProps ) => {
		const [ isExpanded, setIsExpanded ] = useState( false );
		const [ inputHasFocus, setInputHasFocus ] = useState( false );
		const [ query, setQuery ] = useState( dynamicQuery ? queryOpt : '' );
		const [ focusedItemIndex, setFocusedItemIndex ] = useState( -1 );

		const currentOption = options.find(
			( option: Option ) => option.value === value
		);
		const [ selectedSuggestion, setSelectedSuggestion ] = useState(
			currentOption || null
		);
		const currentLabel = currentOption?.label ?? '';
		const listRef: React.RefObject void;
		} > = React.createRef();
		const instanceId = useInstanceId(
			VirtualizedComboBox,
			'virtualized-combobox-control'
		);

		const togglePopover = () => {
			setIsExpanded( ! isExpanded );
		};

		const onFocus = () => {
			setInputHasFocus( true );
			setIsExpanded( true );
			setQuery( '' );
		};

		const onBlur = () => {
			setInputHasFocus( false );
		};

		const onFocusOutside = () => {
			setIsExpanded( false );
		};

		const onSuggestionSelected = ( newSelectedSuggestion: Option ) => {
			onChange( newSelectedSuggestion.value as string );
			speak( messages.selected, 'assertive' );
			setSelectedSuggestion( newSelectedSuggestion );
			setQuery( '' );
			setIsExpanded( false );
		};

		const getNextIndex = ( offset = 1 ) => {
			let nextIndex = focusedItemIndex + offset;
			if ( nextIndex = options.length ) {
				nextIndex = 0;
			}
			return nextIndex;
		};

		const handleArrowNavigation = ( offset = 1 ) => {
			let nextIndex = getNextIndex( offset );
			let offsetDirection = offset;
			while ( options[ nextIndex ]?.isGroupLabel ) {
				offsetDirection =
					offset  {
			let preventDefault = false;

			if ( event.defaultPrevented ) {
				return;
			}

			switch ( event.code ) {
				case 'Enter':
					if ( selectedSuggestion ) {
						onSuggestionSelected( selectedSuggestion );
						preventDefault = true;
					}
					break;
				case 'ArrowUp':
					handleArrowNavigation( -1 );
					preventDefault = true;
					break;
				case 'ArrowDown':
					handleArrowNavigation( 1 );
					preventDefault = true;
					break;
				case 'Escape':
					setIsExpanded( false );
					setSelectedSuggestion( null );
					preventDefault = true;
					break;
				default:
					break;
			}

			if ( preventDefault ) {
				event.preventDefault();
			}
		};

		const matchingSuggestionsToFirstIndex = () => {
			const match = removeAccents( query.toLocaleLowerCase() );
			let foundKey = 0;

			for ( let i = 0; i  {
			if ( dynamicQuery && setQueryOpt ) {
				setQueryOpt( event.target.value );
			}
			setQuery( event.target.value );
			const matchIndex = matchingSuggestionsToFirstIndex();

			if ( inputHasFocus ) {
				setIsExpanded( true );
			}

			if ( listRef.current ) {
				listRef.current.scrollToItem( matchIndex, 'center' );
				setFocusedItemIndex( matchIndex );
				setSelectedSuggestion( options[ matchIndex ] );
			}
		};

		const selectChange = ( nextValue: string ) => {
			onChange( nextValue );
			setInputHasFocus( false );
			setIsExpanded( false );
			setQuery( '' );
		};

		return (
			<detectoutside onfocusoutside="{">
				<basecontrol id="{" instanceid as string label="{">
					<div classname="components-combobox-control__suggestions-container" tabindex="{" onkeydown="{" as unknown keyboardeventhandler htmldivelement>
						}
						aria-hidden="true"
					>
						<flex gap="{" align="center" justify="space-between" style="{" height:>
							<flexitem style="{" width:>
								<input type="text" classname="components-combobox-control__input components-form-token-field__input" value="{" isexpanded query : currentlabel aria-label="{" label undefined placeholder="Search..." onblur="{" onfocus="{" onchange="{" oninputchange>
							</flexitem>
							<flexitem style="{" height:>
								<button type="button" classname="components-select-control__input components-form-token-field__input" style="https://agahtajhiz.github.io/wp-content/plugins/neve-pro-addon/includes/modules/custom_layouts/assets/app/src/components/shared/{" border: height: margin: padding: onclick="{" togglepopover>
									<icon size="{" icon="{" isexpanded chevronup : chevrondown></icon>
								</button>
							</flexitem>
						</flex>

						{ isExpanded && (
							<list id="{" instanceid classname="components-form-token-field__suggestions-list" style="{" padding: position: height="{" options.length>= 5
										? 120
										: options.length * 24
								}
								itemCount={ options.length }
								itemData={ {
									options,
									focusedItemIndex,
									query,
									id: instanceId,
									onChange: selectChange,
								} }
								itemSize={ 24 }
								width={ 248 }
								ref={ listRef }
							>
								{ Row }
							</list>
						) }
					</div>
				</basecontrol>
			</detectoutside>
		);
	}
);

export default VirtualizedComboBox;
</button>