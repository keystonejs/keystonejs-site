import React from 'react';
import jade from 'app/html/templates'
import {default as nav, routes} from 'config';

class Example extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'Fetch Examples '
		this.state = { html: props.response }
		this.props = props
	}
	render() {
		let sendme = { 
			"language": "en",
			"section": "learn",
			"docssection": { "value": "learn", "path": "/docs/learn", "label": "Learn" },
			"title": "Learn",
			docsnav: nav.en.docsnav,
		}
		const menu = jade['en/templates/left-menu'](sendme)
		return (<div>
			<div className="page-header page-header">
				<div className="container">
					<h1>Fetch Examples</h1>
					<p className="lead">using <code>fetch</code> to retrieve content</p>
				</div>
			</div>
			<div className="container">
				<div className="col-sm-3">
					<div dangerouslySetInnerHTML={{ __html: menu }} />
				</div>
				<div className="col-sm-9 docs-content">
					<p className="caution-note"> When <code>window.fetch</code> is not available, the <code>whatwg-fetch</code>  polyfill will be used.  If you experience issues, make sure you are not defining <b>fetch</b> as a local or global variable. </p>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
}

export default Example
