import React, { useState, useEffect } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <OddNumbers title='Odd numbers' number={number} />
      <EvenNumbers title='Even numbers' number={number} />
      <Numbers title='All numbers' number={number} />
      <Numbers title='Just 17' number={17} />
    </div>
  );
};

export default App;
