import React, { useState } from 'react';
import Clock from './Clock.jsx';

const locations = [
  { location: 'New York', offset: -5 },
  { location: 'Kyiv', offset: 3 },
  { location: 'London', offset: 0 },
];

const App = () => {
  const [showClocksToggle, setShowClocksToggle] = useState(true);
  const handleShowToggleClocks = () => {
    setShowClocksToggle(!showClocksToggle);
  };

  return (
    <>
      {showClocksToggle && <Clock locations={locations} />}
      <div className="clock__time">
        <button className="clock__btn" onClick={handleShowToggleClocks}>
          {showClocksToggle ? 'Hide clocks' : 'Show clocks'}
        </button>
      </div>
    </>
  );
};

export default App;
