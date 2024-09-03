import React, { useState } from 'react';
import Clock from './Clock';

const locations = [
  { location: 'New York', offset: -5 },
  { location: 'Kyiv', offset: 3 },
  { location: 'London', offset: 0 },
];

const App = () => {
  const [showClocks, setShowClocks] = useState(true);

  return (
    <div className="clocks">
      {showClocks && (
        <div className="clocks">
          {locations.map((loc, index) => (
            <Clock key={index} location={loc.location} offset={loc.offset} />
          ))}
        </div>
      )}
      <button onClick={() => setShowClocks(!showClocks)}>
        {showClocks ? 'Hide' : 'Show'} Clocks
      </button>
    </div>
  );
};

export default App;
