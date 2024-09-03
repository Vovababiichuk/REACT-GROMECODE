import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(17);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)} className="counter__button">-</button>
      <span onClick={() => setCount(0)} className="counter__value"> {count} </span>
      <button onClick={() => setCount(count + 1)} className="counter__button">+</button>
    </div>
  );
};

export default Counter;
