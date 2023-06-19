import React from 'react';
import { __ } from '@wordpress/i18n';
import { isRenderDebugOn } from '../../common/utils';
import DebugRender from '../shared/DebugRender';
import RuleGroup from './RuleGroup';
import { useState } from '@wordpress/element';

/**
 * Check if an item is an object
 *
 * @param {any} itemToCheck
 */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const isObject = ( itemToCheck: any ) => {
	return (
		itemToCheck &&
		typeof itemToCheck === 'object' &&
		! Array.isArray( itemToCheck )
	);
};

/**
 * Type of Rules
 */
export type Rules = {
	root: string | [  ];
	condition: string | [  ];
	end: string | [  ];
};

/**
 * Type for ConditionalPanel
 */
type ConditionalPanelArgs = {
	selectedRules: Rules[][];
	onChange: ( nextValue: Rules[][] ) => void;
	updateDb: ( nextValue: Rules[][] ) => void;
	description?: string;
};

/**
 * ConditionalPanel.
 *
 * @param {ConditionalPanelArgs} args
 * @class
 */
const ConditionalPanel = React.memo(
	( {
		selectedRules,
		onChange,
		updateDb,
		description = undefined,
	}: ConditionalPanelArgs ) => {
		const migrateGroupData = ( oldGroup: Record ) => {
			const newGroupData: Rules[] = [];
			Object.values( oldGroup ).forEach( ( groupItem: Rules ) => {
				if ( Array.isArray( groupItem.end ) ) {
					groupItem.end.forEach( ( item: [  ] ) => {
						const currentItem = {
							root: groupItem.root,
							condition: groupItem.condition,
							end: item,
						};
						newGroupData.push( currentItem );
					} );
				} else {
					newGroupData.push( groupItem );
				}
			} );

			return newGroupData;
		};

		const getRules = () => {
			let result = selectedRules;
			if (
				( Array.isArray( selectedRules ) &&
					selectedRules.length === 0 ) ||
				! selectedRules
			) {
				result = [ [ { root: '', condition: '===', end: '' } ] ];
			}

			if ( isObject( result ) ) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				result = Object.values( selectedRules ).map( ( item, _ ) => {
					return isObject( item ) ? Object.values( item ) : item;
				} );
			}

			const rulesAreEmpty =
				! Array.isArray( result[ 0 ] ) || result[ 0 ].length === 0;

			if ( rulesAreEmpty ) {
				result = [ [ { root: '', condition: '===', end: '' } ] ];
			}

			return Object.values( result ).map( ( gr ) =>
				migrateGroupData( gr )
			);
		};
		const rules = getRules() as Rules[][];

		const updateValue = (
			val: string | [  ],
			type: keyof Rules,
			ruleSetIndex: number,
			groupIndex: number
		) => {
			const newValue = [ ...rules ];

			newValue[ groupIndex ][ ruleSetIndex ][ type ] = val;
			if ( type === 'root' && ! selectedRules ) {
				newValue[ groupIndex ][ ruleSetIndex ].end = '';
			}

			magicTags[ groupIndex ] = getGroupMagicTags(
				newValue[ groupIndex ]
			);
			setMagicTags( magicTags );

			onChange( newValue );
			updateDb( newValue );
		};

		const addRuleSet = ( ruleIndex: number, groupIndex: number ) => {
			const newValue = [ ...rules ];

			newValue[ groupIndex ].splice( ruleIndex + 1, 0, {
				root: '',
				condition: '===',
				end: '',
			} );

			onChange( newValue );
			updateDb( newValue );
		};

		const getGroupMagicTags = ( groupValue: Rules[] ) => {
			if ( ! window.neveCustomLayouts.magicTags ) {
				return [];
			}

			let allMagicTags: string[] = [];
			for ( const index in groupValue ) {
				const rule = groupValue[ index ];
				const root = rule.root;
				const cond = rule.condition;
				const end = rule.end;

				if ( cond !== '===' ) {
					continue;
				}

				if (
					root === '' ||
					end === '' ||
					typeof root !== 'string' ||
					typeof end !== 'string'
				) {
					continue;
				}

				if (
					! window.neveCustomLayouts.magicTags.hasOwnProperty( root )
				) {
					continue;
				}

				if (
					window.neveCustomLayouts.magicTags[ root ].hasOwnProperty(
						'general'
					)
				) {
					allMagicTags = allMagicTags.concat(
						window.neveCustomLayouts.magicTags[ root ].general
					);
				}

				const endArray = window.neveCustomLayouts.magicTags[ root ];
				if ( ! endArray.hasOwnProperty( end ) ) {
					continue;
				}

				allMagicTags = allMagicTags.concat( endArray[ end ] );
			}

			return allMagicTags.filter(
				( tag, index ) => allMagicTags.indexOf( tag ) === index
			);
		};

		const getDefaultMagicTags = () => {
			const defaultTags: Record = [];

			// extract magic tags of the current rule groups (already saved ones)
			for ( const index in getRules() ) {
				const groupRules = rules[ index ];
				defaultTags[ index ] = getGroupMagicTags( groupRules );
			}

			return defaultTags;
		};

		const [ magicTags, setMagicTags ] = useState( getDefaultMagicTags );

		const addRuleGroup = ( groupIndex: number ) => {
			const newValue = [ ...rules ];

			newValue.splice( groupIndex + 1, 0, [
				{ root: '', condition: '===', end: '' },
			] );

			onChange( newValue );
			updateDb( newValue );
		};

		const removeRuleSet = ( ruleIndex: number, groupIndex: number ) => {
			const newValue = [ ...rules ];

			newValue[ groupIndex ].splice( ruleIndex, 1 );

			onChange( newValue );
			updateDb( newValue );
		};

		const removeRuleGroup = ( groupIndex: number ) => {
			const newValue = [ ...rules ];

			newValue.splice( groupIndex, 1 );

			onChange( newValue );
			updateDb( newValue );
		};

		return (
			
				<div classname="neve-white-background-control">
					{ isRenderDebugOn && <debugrender forlabel="cond"></debugrender> }
					{ /* eslint-disable-next-line jsx-a11y/label-has-for */ }
					<label>{ __( 'Conditional Logic', 'neve' ) }</label>
					<span style="https://agahtajhiz.github.io/wp-content/plugins/neve-pro-addon/includes/modules/custom_layouts/assets/app/src/components/conditional/{" display: margintop: marginbottom: color:>
						{ description && <i>{ description }</i> }
					</span>
					{ rules.map( ( group, index ) => {
						group = migrateGroupData( group );
						return (
							<rulegroup key="{" index group="{" isfirst="{" islast="{" rules.length canaddmore="{" magictags="{" onchange="{" val: string | type: keyof rules rulesetindex: number> {
									updateValue(
										val,
										type,
										ruleSetIndex,
										index
									);
								} }
								addRuleSet={ ( ruleIndex: number ) => {
									addRuleSet( ruleIndex, index );
								} }
								addRuleGroup={ () => {
									addRuleGroup( index );
								} }
								removeRuleSet={ ( ruleIndex: number ) => {
									removeRuleSet( ruleIndex, index );
								} }
								removeRuleGroup={ () => {
									removeRuleGroup( index );
								} }
							/>
						);
					} ) }
				</rulegroup>
</div>
			>
		);
	}
);

export default ConditionalPanel;
