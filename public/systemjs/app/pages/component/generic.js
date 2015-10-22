import React from 'react';
/** 
 * A generic container
 * expects a html prop
 * */

	class Generic extends React.Component {
		constructor(props) {
			super(props)
			this.displayName = 'Generic '
			this.state = { html: props.html || props.response }
			this.props = props
		},
		componentWillReceiveProps(props) {
			this.setState(props)
		},
		render() {
			return !this.state.html ? <span /> : <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
		}
	}
	
	return Generic
