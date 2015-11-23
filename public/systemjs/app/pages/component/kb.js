import React from 'react';
import Pages from '../fetch/fetch'
import Debug from 'debug'
import Gab from '../../common/gab'

let debug = Debug('keystone:pages:component:kb');

	export default (path, home, giturl) => {

		if(!giturl) giturl = 'https://raw.githubusercontent.com/wiki/snowkeeper/keystone'
		if(!path) path = '/docs/learn/kb'
		if(!home) home = '/Knowledge-Base'
		
		class KB extends React.Component {
			constructor(props) {
				super(props)
				this.displayName = 'Wiki Page '	
				this.state = {
					html: this.setPage()
				}
				this._update = false
				this._stopInterval = false
				this.tagSearch = this.tagSearch.bind(this)
			}
			setPage() {
				let url = giturl 
				let pathname = location.pathname.replace(path, '')
				let returnType = 'markdown'
				
				// the home pages contain menu links that
				// we need to transform
				if( pathname === home || pathname === '') {
					returnType = ['markdown','wikiindexpage']
				}
				let page = url + pathname + '.md'

				let html = Pages(page, false, returnType, {path: path, onUpdate: this.tagSearch})
				
				return html
			}
			componentWillReceiveProps(props) {
				debug('receiveProps');
				this.setState({html: this.setPage()});
				this._update = true;
			}
			componentDidUpdate() {
				debug('didUpdate');
			}
			componentDidMount() {
				debug('did mount');
				
			}
			tagSearch() {
				debug('tag-search');
				
				Prism.highlightAll()
								
				setTimeout(() => {
					debug('emit tag options')
					Gab.emit('tag-search:tag','.create-anchor-links :header');
				},500);
				// wait for results
				Gab.once('tag-search:tagged',(tags) => {
					debug('got tag response', tags)
					if(tags.success) {
						Gab.emit('tag-search:update', {
							nameFromNextTag: true,
							nameFromTag: ["H2", "H3", "H4", "H5"],
							nameFromTagAttr: 'innerHTML',
							contextTextUntilTag: 'h*',
							useLocation: false,
							skipHistory: false,
							topLink: true,
							mainHeader: 'header',
							classes: {
								'li:a': '',
							}
						})
						Gab.once('tag-search:options', (options) => {
							debug('new tag-search options', options)
						})
					}
				});
			}
			render() {
				if('function' === typeof this.state.html) {
					
					// render a component
					return  (<div> <this.state.html /> </div>);
				
				} else if('object' === typeof this.state.html) {
					
					// this is a rendered componenet
					return  (<div> {this.state.html} </div>);
					
				} else {
					
					// add anything else
					return (<div dangerouslySetInnerHTML={{ __html: this.state.html }} />)
					
				}
			}
		}
		return KB
		
	}

