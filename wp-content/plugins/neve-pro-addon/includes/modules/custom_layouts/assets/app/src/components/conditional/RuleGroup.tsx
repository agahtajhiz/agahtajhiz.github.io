import React from 'react';

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import RuleComponent from './RuleComponent';
import { Rules } from './ConditionalPanel';
import MagicTagsComponent from './MagicTagsComponent';

/**
 * Type for RuleGroup
 */
type RuleGroupArgs = {
	group: Rules[];
	isFirst: boolean;
	isLast: boolean;
	canAddMore: boolean;
	magicTags: string[];
	onChange: (
		val: string | [  ],
		type: keyof Rules,
		ruleSetIndex: number
	) => void;
	addRuleSet: ( ruleIndex: number ) => void;
	addRuleGroup: () => void;
	removeRuleSet: ( ruleIndex: number ) => void;
	removeRuleGroup: () => void;
};

/**
 * Component RuleGroup.
 *
 * @param {RuleGroupArgs} args
 * @class
 */
const RuleGroup = ( {
	group,

	isFirst,
	isLast,
	canAddMore,
	magicTags,
	onChange,
	addRuleSet,
	addRuleGroup,
	removeRuleSet,
	removeRuleGroup,
}: RuleGroupArgs ) => {
	const updateValues = (
		value: string,
		type: keyof Rules,
		ruleSetIndex: number
	) => {
		onChange( value, type, ruleSetIndex );
	};

	if ( group.length 
			<div classname="rule-group">
				<magictagscomponent magictags="{"></magictagscomponent>

				{ Object.values( group ).map( ( ruleset, index ) => (
					<rulecomponent key="{" index ruleset="{" islast="{" group.length isfirst="{" canaddmore="{" updateroot="{" value: string> {
							updateValues( value, 'root', index );
						} }
						updateCondition={ ( value: string ) => {
							updateValues( value, 'condition', index );
						} }
						updateEnd={ ( value: string ) => {
							updateValues( value, 'end', index );
						} }
						addRuleSet={ () => {
							addRuleSet( index );
						} }
						removeRuleSet={ () => {
							removeRuleSet( index );
						} }
					/>
				) ) }
				<div classname="actions">
					<button issecondary issmall disabled canaddmore classname="add-group" onclick="{" addrulegroup>
						{ __( 'Add Rule Group', 'neve' ) }
					</button>
					{ ! ( isLast && isFirst ) && (
						<button islink isdestructive issmall classname="remove-group" onclick="{" removerulegroup>
							{ __( 'Remove Rule Group', 'neve' ) }
						</button>
					) }
				</div>
			</rulecomponent>
</div>
			{ ! isLast && (
				<span classname="chainer">{ __( 'or', 'neve' ) }</span>
			) }
		>
	);
};

export default RuleGroup;
