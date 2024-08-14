import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="New York" offset={-5} />
      <Clock location="Kyiv" offset={3} />
      <Clock location="London" offset={0} />
    </>
  );
};

export default App;
