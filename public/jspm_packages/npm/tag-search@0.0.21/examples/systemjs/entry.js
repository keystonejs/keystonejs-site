/* */ 
import { render } from 'react-dom'
import React from 'react'
import Anchor from 'app'

let anchorOpts = {
	useLocation: false,
	nostyles: false,
	noclasses: false,
	searchBar: 'searchBar',
	searchList: 'searchList',
	tagSelector: 'a[name]',
	wrapperLeftText: 'click for menu',
	wrapperRightText: 'click to search',
	styles: {
		'searchBar': {
			'height': '50px',
			'width': '100%',
			'position': 'fixed',
			'bottom': 0,
			'right': 0,
			'zIndex': 1002,
			'padding': 0
		},
		'input': {
			'width': '100%',
			'fontSize': '1.4em',
			'fontWeight': 'bold',
			'color': '#354A5C',
			'backgroundColor': '#D98F15',
			'border': 'none',
			'height': '50px',
			'zIndex': 1003
		},
		'inputDiv': {
			'paddingTop': 0,
			'paddingRight': 0,
			'paddingBottom': 0,
			'paddingLeft': 8,
			'height': '50px'
		},
		'searchList': {
			'height': '300px',
			'margin': '-370px 15px 0 15px',
			'border': '1px solid #ccc',
			'borderBottom': 'none',
			'overflowY': 'auto',
			'backgroundColor': '#234258',
			'padding': '10px 20px',
			'display': 'none'
		},
		'ul': {
			'fontSize': '13px',
			'listStyle': 'none',
			'lineHeight': 1.2,
			'margin': '0',
			'padding': 0,
			'position': 'relative',
			'zIndex': 2,
		},
		'li': {
			'padding': '5px 5px',
			'color': '#CACFD2',
		},
		'li:a': {
			'color': '#EEAE18',
			'display': 'block',
			'fontSize': '16px',
			'padding': '5px 5px 5px 0',
		},
		'li:heading': {
			'fontSize': '1.25em',
			'textTransform': 'uppercase',
			'padding': '5px 5px',
			'color': '#E8ECEF',
		},
		'context': {
			'color': '#F1F1F4',
			'fontSize': '.9em',
			'display': 'block',
			'marginTop': 0,
			'height': 'auto',
		},
		'wrapper': {
			'height': '50px',
			'position': 'absolute',
			'top': 0,
			'right': 0,
			'zIndex': 1022,
			'padding': 0,
			'width': '100%',
			'backgroundColor': '#D98F15',
			'color': '#234D76'
		},
		'wrapperLeft': {
			'float': 'right',
			'width': '50%',
			'textAlign': 'center',
			'height': '50px',
			'padding': 0,
			'margin': '-13px',
			'cursor': 'pointer',
		},
		'wrapperRight': {
			'float': 'left',
			'width': '50%',
			'textAlign': 'center',
			'height': '50px',
			'padding': 0,
			'margin': '-13px',
			'cursor': 'pointer',
		}
	}
}

render( <Anchor  options={anchorOpts} />, document.getElementById('anchor-search'));


