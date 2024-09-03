import React, { useState } from 'react';
import Clock from './Clock';

const locations = [
  { location: 'New York', offset: -5 },
  { location: 'Kyiv', offset: 3 },
  { location: 'London', offset: 0 },
];

const App = () => {
  const [isVisibleClocks, setIsVisibleClocks] = useState(true);

  return (
    <div className="clocks">
      {isVisibleClocks && (
        <div className="clocks">
          {locations.map((loc, index) => (
            <Clock key={index} location={loc.location} offset={loc.offset} />
          ))}
        </div>
      )}
      <button onClick={() => setIsVisibleClocks(!isVisibleClocks)}>
        {isVisibleClocks ? 'Hide' : 'Show'} Clocks
      </button>
    </div>
  );
};

export default App;
