import React, { Component } from 'react';

export default class Life extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startText: 'good place to create state',
			counter: 0,
		};
	}

	componentDidMount() {
		console.log('API calls, subscriptions');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
	}

	incrementCounter = () => {
		this.setState(prevState => ({
			counter: prevState.counter + 1
		}));
	}

	render() {
		return (
			<div>
				<div>return React element to build DOM</div>
				{this.state.startText}
				<br />
				<button onClick={this.incrementCounter}>Increment Counter</button>
				<div>Counter: {this.state.counter}</div>
			</div>
		);
	}
}
