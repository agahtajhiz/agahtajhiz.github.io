import React, { useEffect } from 'react';

import { __ } from '@wordpress/i18n';
import { Button, Spinner } from '@wordpress/components';
import { Suspense, useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

import { Toggle, maybeParseJson } from '@neve-wp/components';

import { LayoutSelect } from './selects/LayoutSelect';
import { HooksSelect } from './selects/HooksSelect';
import { SidebarSelect } from './selects/SidebarSelect';
import { SidebarActionsSelect } from './selects/SidebarActionsSelect';

import { PostMeta } from '../types/types';
import { InsideSelect } from './selects/InsideSelect';
import NumberInputComponent from './inputs/NumberInputComponent';
import DateTimeComponent from './inputs/DateTimeComponent';
import ConditionalPanel, { Rules } from './conditional/ConditionalPanel';
import { copyTextToClipboard } from '../common/utils';

type Props = {
	postMeta: PostMeta;
	currentPostId: number;
	setPostMeta: ( newValue: Record | null ) => void;
	setPostTitle: ( newValue: string ) => void;
	removeEditorPanel: ( panel: string ) => T;
};

const MainPanel: React.FC = ( {
	postMeta,
	currentPostId,
	setPostMeta,
	setPostTitle,
	removeEditorPanel,
} ) => {
	const {
		layouts,
		hooks,
		sidebarPositions,
		sidebarActions,
		insidePositions,
	} = window.neveCustomLayouts.sidebarOptions;

	const REMOVE_PANELS = [
		'featured-image',
		'post-excerpt',
		'discussion-panel',
		'page-attributes',
	];
	REMOVE_PANELS.forEach( ( panel ) => {
		removeEditorPanel( panel );
	} );

	const META_LAYOUT = 'custom-layout-options-layout';
	const META_HOOK = 'custom-layout-options-hook';
	const META_PRIORITY = 'custom-layout-options-priority-v2';
	const META_SIDEBAR = 'custom-layout-options-sidebar';
	const META_SIDEBAR_ACTIONS = 'custom-layout-options-sidebar-action';
	const META_INSIDE = 'custom-layout-options-inside-display';
	const META_EVENTS_NO = 'custom-layout-options-events-no';
	const META_EXPIRE = 'custom-layout-options-should-expire';
	const META_EXP_DATE = 'custom-layout-expiration-date';
	const META_CONDITIONAL = 'custom-layout-conditional-logic';

	const [ isloaded, setLoaded ] = useState( false );
	const [ conditions, setConditions ] = useState( () => {
		return ( ( maybeParseJson( postMeta[ META_CONDITIONAL ] as string ) ??
			[] ) as unknown ) as Rules[][];
	} );

	const [ date, setDate ] = useState(
		postMeta[ META_EXP_DATE ]
			? new Date( postMeta[ META_EXP_DATE ] )
			: new Date()
	);

	const showConditional = [
		'header',
		'inside',
		'single_post',
		'single_page',
		'archives',
		'footer',
		'global',
		'hooks',
		'sidebar',
	].includes( postMeta[ META_LAYOUT ] as never );

	const showIndividual = postMeta[ META_LAYOUT ] === 'individual';

	const showHooks = postMeta[ META_LAYOUT ] === 'hooks';

	const showSidebar = postMeta[ META_LAYOUT ] === 'sidebar';

	const hasManySidebars = Object.keys( sidebarPositions ).length > 1;

	const showInside = postMeta[ META_LAYOUT ] === 'inside';

	const showExpirationDate = postMeta[ META_EXPIRE ];

	const updateExpirationDate = ( newDate: string | null ) => {
		if ( newDate === null || newDate === '' ) {
			newDate = new Date().toISOString();
		}

		setDate( new Date( newDate ) );
		setPostMeta( {
			[ META_EXP_DATE ]: newDate,
		} );
	};

	const changeLayout = ( nextValue: string ) => {
		setPostMeta( { [ META_LAYOUT ]: nextValue } );
	};

	const changeExpire = ( nextValue: Record ) => {
		setPostMeta( {
			[ META_EXPIRE ]: ( nextValue as unknown ) as boolean,
		} );
	};

	const changeHook = ( nextValue: string ) => {
		setPostMeta( {
			[ META_HOOK ]: nextValue,
		} );
	};

	const changePriority = (
		nextValue: number | Record
	) => {
		setPostMeta( {
			[ META_PRIORITY ]: nextValue,
		} );
	};

	const changeSidebar = ( nextValue: string ) => {
		setPostMeta( {
			[ META_SIDEBAR ]: nextValue,
		} );
	};

	const changeSidebarAction = ( nextValue: string ) => {
		setPostMeta( {
			[ META_SIDEBAR_ACTIONS ]: nextValue,
		} );
	};

	const changeInside = ( nextValue: string ) => {
		setPostMeta( {
			[ META_INSIDE ]: nextValue,
		} );
	};

	const changeEventNo = ( nextValue: number | Record ) => {
		setPostMeta( {
			[ META_EVENTS_NO ]: nextValue,
		} );
	};

	const changeConditionalRules = ( nextValue: Rules[][] ) => {
		const filteredValue = Object.values( nextValue )
			.map( function ( group ) {
				let itemToCheck = group as Array;
				itemToCheck = itemToCheck.filter( function ( condition ) {
					if (
						Array.isArray( condition.end ) &&
						condition.end.length === 0
					) {
						return false;
					}

					if (
						Array.isArray( condition.root ) &&
						condition.root.length === 0
					) {
						return false;
					}

					if (
						Array.isArray( condition.end ) &&
						condition.end.length === 0
					) {
						return false;
					}

					return condition.end !== '' && condition.root !== '';
				} );

				return itemToCheck;
			} )
			.filter( ( value ) => JSON.stringify( value ) !== '[]' );

		const valueToUpdate =
			Object.keys( filteredValue ).length !== 0
				? JSON.stringify( filteredValue )
				: null;
		setPostMeta( { [ META_CONDITIONAL ]: valueToUpdate } );
	};

	const shortCodeText = `[nv-custom-layout id="${ currentPostId }"]`;

	useEffect( () => {
		if ( ! isloaded ) {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams( queryString );
			if (
				postMeta[ META_LAYOUT ] &&
				postMeta[ META_LAYOUT ] === 'none' &&
				urlParams.get( 'layout' )
			) {
				changeLayout( urlParams.get( 'layout' ) as string );
			}

			if (
				postMeta[ META_HOOK ] &&
				postMeta[ META_HOOK ] === 'none' &&
				urlParams.get( 'hook' )
			) {
				changeHook( urlParams.get( 'hook' ) as string );
			}

			if ( urlParams.get( 'title' ) ) {
				setPostTitle( urlParams.get( 'title' ) as string );
			}

			setLoaded( true );
		}
	}, [] );

	return (
		
			<suspense fallback="{"></suspense> }>
				<layoutselect layouts="{" selectedvalue="{" postmeta meta_layout || onchange="{" changelayout></layoutselect>

				{ showIndividual && (
					<div classname="neve-white-background-control">
						<span>{ __( 'Available shortcode:', 'neve' ) }</span>
						<button classname="short-code" icon="welcome-write-blog" label="{" __ shortcode showtooltip="{" true issmall onclick="{" async> {
								await copyTextToClipboard( shortCodeText );
							} }
						>
							{ shortCodeText }
						</button>
					</div>
				) }

				<toggle label="{" __ expiration date checked postmeta meta_expire || false onchange="{" changeexpire></toggle>

				{ showExpirationDate && (
					<datetimecomponent currentdate="{" date.toisostring onchange="{" updateexpirationdate></datetimecomponent>
				) }

				{ showHooks && (
					
						<hooksselect hooks="{" selectedvalue="{" postmeta meta_hook || onchange="{" changehook></hooksselect>
					>
				) }

				{ showSidebar && hasManySidebars && (
					<sidebarselect sidebarpositions="{" selectedvalue="{" postmeta meta_sidebar || onchange="{" changesidebar></sidebarselect>
				) }

				{ showSidebar && (
					<sidebaractionsselect sidebaractions="{" selectedvalue="{" postmeta meta_sidebar_actions || onchange="{" changesidebaraction></sidebaractionsselect>
				) }

				{ ( showHooks || showSidebar ) && (
					<numberinputcomponent label="{" __ defaultvalue="{" value="{" postmeta meta_priority || onchange="{" changepriority max="{"></numberinputcomponent>
				) }

				{ showInside && (
					
						<insideselect insidepositions="{" selectedvalue="{" postmeta meta_inside || onchange="{" changeinside></insideselect>

						<numberinputcomponent defaultvalue="{" value="{" postmeta meta_events_no || onchange="{" changeeventno></numberinputcomponent>
					>
				) }

				{ showConditional && (
					<conditionalpanel description="{" __ no conditional logic is selected the custom layout will be applied site-wide. selectedrules="{" conditions onchange="{" setconditions updatedb="{" changeconditionalrules></conditionalpanel>
				) }
			
		>
	);
};

export default compose(
	withSelect( ( select ) => {
		return {
			postMeta: select( 'core/editor' ).getEditedPostAttribute(
				'meta'
			) as PostMeta,
			currentPostId: select( 'core/editor' ).getCurrentPostId() as number,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { removeEditorPanel } = dispatch( 'core/edit-post' );
		return {
			setPostMeta(
				newMeta:
					| null
					| string
					| boolean
					| number
					| Record
			) {
				dispatch( 'core/editor' ).editPost( { meta: newMeta } );
			},
			setPostTitle( newTitle: string ) {
				dispatch( 'core/editor' ).editPost( { title: newTitle } );
			},
			removeEditorPanel,
		};
	} )
)( MainPanel );
