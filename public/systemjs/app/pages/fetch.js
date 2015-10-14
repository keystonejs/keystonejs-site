import React from 'react'
import strip from 'striptags'
import Jade from 'pages/jade';
import {default as nav} from 'config';
import { translate as markdown }  from 'md'
import fetch2 from 'fetch'

if(typeof window.fetch == 'undefined' ) {
	// polyfill fetch
	window.fetch = fetch2
}

export default (page, Component, dataType) => {
	
	class Page extends React.Component {
		constructor(props){
			super(props)
			this.displayName = 'Page Template'
			this.state = {}
		}
		componentDidMount() {
			fetch(page, { mode: 'cors' })
				.then(r => {
					let dType = (dataType instanceof Array) ? dataType[0] : dataType 
					switch(dType) {
						case 'json':
						case 'jsonp':
							return r.json()
							break
						case 'blob':
							return r.blob()
							break
						case 'arrayBuffer':
							return r.arrayBuffer()
							break
						case 'formData':
							return r.formData()
							break
						case 'body':
						default:
							return r.text()
					}					
				})
				.then(data => {
					let ret = this.transform(data, dataType)
					this.setState({
						response: ret
					});
					return;
				}.bind(this))
			.catch(e => {
				console.log('error fetching', e)
				let sendme = { 
					"language": "en",
					"section": "learn",
					"docssection": { "value": "learn", "path": "/docs/learn", "label": "Learn" },
					"title": "Learn",
					docsnav: nav.en.docsnav,
					page: page,
					e: e
				}
				let resp = Jade('en/pages/fetchError', sendme, '/fetch')
				this.setState({
					response: resp
				});
			})
		}
		transform(data, dataType) {
			if(!dataType) {
				return data;
			} else if(dataType instanceof Array) {
				for( let t of dataType) {
					data = run(t, data)
				}
				return data
			} else {
				return run(dataType, data)
			}
			function run(type, data) {
				switch(type) {
					case 'body':
						return /<body.*?>([\s\S]*)<\/body>/.exec(data)[1]
						break
					case 'clean':
						return strip(data) // second argument is allowed tags as string or array 
						break
					case 'code':
						let preed
						try {
							preed = JSON.stringify(data, null, 4);
						} catch(e) {
							preed = e
						}
						return ("<pre>" + preed + "</pre>") 
						break
					case 'markdown':
						return markdown({ source: data })
						break
					case 'noscript':
						let regx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
						while (regx.test(data)) {
							data = data.replace(regx, "");
						}
						return data
						break
					default:
						return data
				}	
			}
		}
		render() {
			return this.state.response ? <Component {...this.props} {...this.state} /> : <span />
		}
	}

	Page.propTypes = {};

	return Page
}

