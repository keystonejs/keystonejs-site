import React from 'react';
import Templates from '../html/templates'
import {languages as nav, routes} from '../config';

/**
 * This is a template class.  The route handler will trigger the 
 * correct component to populate this.props.children
 * 
 * typically populated with pages/kb/kb
 * */

	class KbPage extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'knowledgeBase'
			this.state = { html: props.response }
			this.props = props
		}
		render() {
			let sendme = { 
				"language": "en",
				"section": "learn",
				"docssection": { "value": "learn", "path": "/docs/learn/reference", "label": "Learn" },
				"title": "Learn",
				docsnav: nav.en.docsnav,
			}
			
			const menu = Templates['en/templates/left-menu'](sendme)
			return (<div>
				<div className="page-header page-header">
					<div className="container">
						<h1>Ref:'wiki wiki wiki'</h1>
						<p className="lead">.keystone(knowledge base)</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<div dangerouslySetInnerHTML={{ __html: menu }} />
						</div>
						<div className="col-sm-9">
							<div className="docs-content create-anchor-links">
								<a name="start-of-content" />
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>)
		}
	}

	export default KbPage
