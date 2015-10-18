import React from 'react';
import { Router, Route, Link } from 'react-router'
import Page from 'pages/jade';
import wrapListeners from 'common/listen';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: Page('/header', {}, props.location.pathname),
			footer: Page('/footer'),
			language: 'en'
		};
		this.props = props
	}
	componentWillReceiveProps(props) {
		this.setState({
			header: Page('/header', {}, props.location.pathname),
		});
	}
	render() {
		let head = <this.state.header />
		let foot = <this.state.footer />
		if(this.props.location.pathname === '/') {
			head = <span />
			foot = <span />
		}
		return (
			<div>
				{head}
				<div > 
					{this.props.children}
				</div>
				{foot}
			</div>
		);
	}
 
}

export default wrapListeners(App)
