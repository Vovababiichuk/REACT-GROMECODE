import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCounter(counter - 1)} className="counter__button">-</button>
      <span onClick={() => setCounter(0)} className="counter__value"> {counter} </span>
      <button onClick={() => setCounter(counter + 1)} className="counter__button">+</button>
    </div>
  );
};

export default Counter;
