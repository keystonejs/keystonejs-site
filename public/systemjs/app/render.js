import React from 'react';
import { Router, Route, Link } from 'react-router'
import JadePage from './pages/fetch/jade';
import wrapListeners from './listen';
import {baseRoute, cleanPath, getFileName} from './common/util';
import SearchTags from 'tag-search'
import {extend, merge} from 'lodash'
import Debug from 'debug'
import Gab from './common/gab'

let debug = Debug('keystone:app:common:render');

class App extends React.Component {
	constructor(props) {
		super(props);
		let base = baseRoute(props.location.pathname)
		this.state = {
			base: base,
			header: JadePage('/header', {language: base.language}, base.path),
			footer: JadePage('/footer',{language: base.language}, base.path),
			tagSearchOptions: {
				useLocation: false,
				skipHistory: true,
				nostyles: false,
				noclasses: false,
				topLink: true,
				searchBar: 'searchBar',
				searchList: 'searchList',
				tagSelector: '.docs-content a[name], .jl-guide a[name]',
				nameFromTagAttr: 'innerHTML',
				nameFromNextTag: true,
				classes: {
					'searchBar': ' col-sm-offset-3 col-sm-9 ',
					'input': ' form-control clearable',
					'ul': ' sidebar-nav ',
					'searchList': ' docs-sidebar ',
					'context': ' context ',
					'li:heading': ' nav-heading ',
					'li:a': ''
				},
				styles: {
					'searchBar': {},
					'input': {},
					'inputDiv': {},
					'searchList': {},
					'ul': {},
					'li': {},
					'li:a': {},
					'li:heading': {},
					'context': {},
					'wrapper': {
						'height': '50px',
						'position': 'absolute',
						'top': 0,
						'right': 0,
						'zIndex': 1022,
						'padding': '0 0 0 8px',
						'width': '100%',
						'backgroundColor': '#f7f7f7',
						'color': '#7a7a7a'
					}
				},
			}
		} // end setState
		
		debug('constructor done', this.state)
		
		this.updateTagSearch = this.updateTagSearch.bind(this)
	}
	componentWillReceiveProps(props) {
		let base = baseRoute(props.location.pathname)
		debug('props', this.state.base.section, base.section)
		if(this.state.base.section !== base.section || this.state.base.language !== base.language) {
		
			this.setState({
				header: JadePage('/header', {language: base.language}, base.path),
				footer: JadePage('/footer',{language: base.language}, base.path),
				base: base
			});
		}
	}
	updateTagSearch(options) {
		debug('reset tag search',options)
		Gab.emit('tag-search:update', options)
	}		
	render() {
		debug('render app', this)
		let head = <this.state.header />
		let foot = <this.state.footer />
		if(this.props.location.pathname === '/') {
			head = <span />
			foot = <span />
		}		
		let anchor;
		let base = baseRoute()
		if('object' === typeof base) {
			if(base["anchor-search"] == 'true') {
				anchor = <SearchTags reset={true} events={Gab} options={this.state.tagSearchOptions}   {...this.props}   />
			} else {
				anchor = <span />
			}
		} else {
			anchor = <span />
		}
		return (
			<div>
				<a name="top" />
				{head}	
				<div > 
					{this.props.children && React.cloneElement(this.props.children, {
						updateTagSearch: this.updateTagSearch
					})}
				</div>
				{foot}
				{anchor}
			</div>
		);
	}
	
	
 
}

App.defaultProps = {};

export default wrapListeners(App) 
