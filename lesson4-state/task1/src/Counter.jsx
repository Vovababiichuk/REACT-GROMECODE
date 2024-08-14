import React from 'react';
// import { useState, useEffect } from 'react';
import './counter.scss';

//! Function Component

// const Counter = ({ start, interval }) => {
//   const [counter, setCounter] = useState(start);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCounter(prevCounter => prevCounter + 1);
//     }, interval);

// 		// Очищення інтервалу при анмаунті компонента
//     return () => clearInterval(timer);
//   }, [interval]);

//   return <div className="counter">{counter}</div>;
// };

//! Class Component

class Counter extends React.Component {
	constructor({ start, interval }) {
		super();
		this.state = {
			counter: start,
		}

		setInterval(() => {
			this.setState(prevState => ({
				counter: prevState.counter + 1
			}));
		}, interval);
	}

	render() {
		return <div className="counter">{this.state.counter}</div>;
	}
}

export default Counter;
