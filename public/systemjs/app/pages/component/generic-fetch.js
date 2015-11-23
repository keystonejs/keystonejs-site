import React from 'react';
import Pages from '../fetch/fetch';

	export default (page, returnType, options) => {
		class GenericFetch extends React.Component {
			constructor(props) {
				super(props)
				this.displayName = 'Generic ' + page
				this.state = { html: props.html || props.response }
				this.props = props
			}
			render() {
				if('function' === typeof this.state.html) {
					return  (<div> <this.state.html /> </div>);
				} else {
					return (<div dangerouslySetInnerHTML={{ __html: this.state.html }} />)
				}
			}
		}
		
		return Pages(page, GenericFetch, returnType, options)
	}
