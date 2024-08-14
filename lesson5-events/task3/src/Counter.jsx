import React from 'react';
import { useState } from 'react';

//! Function Component

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCountDecrease = () => {
    setCount(prevCount => prevCount - 1);
  }

  const handleCountIncrease = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleCountReset = () => {
    setCount(0);
  }

  return (
    <div className="counter">
      <button data-action="decrease" onClick={handleCountDecrease} className="counter__button">
        -
      </button>
      <span onClick={handleCountReset} className="counter__value">{count}</span>
      <button data-action="increase" onClick={handleCountIncrease} className="counter__button">
        +
      </button>
    </div>
  );
};

//! Class Component-1

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handleCountDecrease = () => {
//     this.setState(prevState => ({
//       count: prevState.count - 1,
//     }));
//   }

//   handleCountIncrease = () => {
//     this.setState(prevState => ({
//       count: prevState.count + 1,
//     }));
//   }

//   handleCountReset = () => {
//     this.setState({
//       count: 0,
//     });
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button data-action="decrease" onClick={this.handleCountDecrease} className="counter__button">
//           -
//         </button>
//         <span onClick={this.handleCountReset} className="counter__value">{this.state.count}</span>
//         <button data-action="increase" onClick={this.handleCountIncrease} className="counter__button">
//           +
//         </button>
//       </div>
//     );
//   }
// }

//! Class Component-2

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handleCountDecrease() {
//     this.setState(prevState => ({
//       count: prevState.count - 1,
//     }));
//   }

//   handleCountIncrease() {
//     this.setState(prevState => ({
//       count: prevState.count + 1,
//     }));
//   }

//   handleCountReset() {
//     this.setState({
//       count: 0,
//     });
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button data-action="decrease" onClick={this.handleCountDecrease.bind(this)} className="counter__button">
//           -
//         </button>
//         <span onClick={this.handleCountReset.bind(this)} className="counter__value">{this.state.count}</span>
//         <button data-action="increase" onClick={this.handleCountIncrease.bind(this)} className="counter__button">
//           +
//         </button>
//       </div>
//     );
//   }
// }

export default Counter;
