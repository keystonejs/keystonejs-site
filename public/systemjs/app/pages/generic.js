import React from 'react';
import Pages from 'pages/index';

export default (page) => {
	class Generic extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Generic ' + page
			this.state = { html: props.html }
			this.props = props
		}
		render() {
			return <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
		}
	}
	
	return Pages(page, Generic)
}
