import React from 'react';
import Templates from '../html/templates'
import {languages as nav, routes} from '../config';
import {baseRoute, cleanPath, getFileName} from '../common/util';
import Debug from 'debug'

let debug = Debug('keystone:app:pages:code-examples');
/**
 * This is a template class.  The route handler will trigger the 
 * correct component to populate this.props.children
 * 
 * typically populated with pages/kb/kb
 * */

	class CodeExamples extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Code Examples'
			this.state = {}
			debug('props', props)
		}
		render() {
			
			let sendme = { 
				"language": "en",
				"section": "learn",
				"docssection": { "value": "learn", "path": "/docs/learn/code", "label": "Learn" },
				"title": "Learn",
				docsnav: nav.en.docsnav,
			}
			debug('render kb', this.props)
			const menu = Templates['en/templates/left-menu'](sendme)
			return (<div>
				<div className="page-header page-header">
					<div className="container">
						<h1>Ref:oh</h1>
						<p className="lead">.learn(how to use KeystoneJS)</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<div dangerouslySetInnerHTML={{ __html: menu }} />
						</div>
						<div className="col-sm-9">
							<div className="docs-content create-anchor-links">
								{this.props.children && React.cloneElement(this.props.children, {
									updateTagSearch: this.props.updateTagSearch
								})}
							</div>
						</div>
					</div>
				</div>
			</div>)
		}
	}

	export default CodeExamples
