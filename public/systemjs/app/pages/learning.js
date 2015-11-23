import React from 'react';
import jade from '../html/templates'
import {languages as nav, routes} from '../config';

	class Learning extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Learning'
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
			const menu = jade['en/templates/left-menu'](sendme)
			return (<div>
				<div className="page-header page-header">
					<div className="container">
						<h1>Ref:Reading</h1>
						<p className="lead">.keystone(reference material)</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<div dangerouslySetInnerHTML={{ __html: menu }} />
						</div>
						<div className="col-sm-9">
							<div className="docs-content">{this.props.children}</div>
						</div>
					</div>
				</div>
			</div>)
		}
	}

	export default Learning
