import React from 'react';
import { useState } from 'react';

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>-</button>
      <span onClick={() => setCounter(0)}>{counter}</span>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>+</button>
    </div>
  );
};

export default UseStateExample;
