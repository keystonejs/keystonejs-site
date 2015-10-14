import React from 'react';
import TestReact from 'react-addons-test-utils'
import Pages from 'pages/fetch'
import jade from 'app/html/templates'

export default (page, returnType) => {
	class Example extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Fetch Page ' + page
			this.state = { html: props.response }
			this.props = props
		}
		render() {
			if('function' === typeof this.state.html) {
				console.log('render generic component')
				return  (<div> <this.state.html /> </div>);
			} else {
				console.log('render generic html')
				return (<div dangerouslySetInnerHTML={{ __html: this.state.html }} />)
			}
			
		}
	}
	return Pages(page, Example, returnType)
}
