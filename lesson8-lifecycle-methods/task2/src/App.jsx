//! ==========================Function Component===========================

// import React, { useState } from 'react';
// import Clock from './Clock.jsx';

// const locations = [
//   { location: 'New York', offset: -5 },
//   { location: 'Kyiv', offset: 3 },
//   { location: 'London', offset: 0 },
// ];

// const App = () => {
//   const [showClocksToggle, setShowClocksToggle] = useState(true);
//   const handleShowToggleClocks = () => {
//     setShowClocksToggle(!showClocksToggle);
//   };

//   return (
//     <>
//       {showClocksToggle && (
//         <div className="clocks">
//           {locations.map(({ location, offset }) => (
//             <Clock key={location} location={location} offset={offset} />
//           ))}
//         </div>
//       )}
//       <div className="clock__time">
//         <button className="clock__btn" onClick={handleShowToggleClocks}>
//           {showClocksToggle ? 'Hide clocks' : 'Show clocks'}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;

//! ==========================Class Component===========================

import React, { Component } from 'react';
import Clock from './Clock.jsx';

const locations = [
  { location: 'New York', offset: -5 },
  { location: 'Kyiv', offset: 3 },
  { location: 'London', offset: 0 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClocksToggle: true,
    };
  }

  handleShowToggleClocks = () => {
    this.setState(prevState => ({
      showClocksToggle: !prevState.showClocksToggle,
    }));
  };

  render() {
    const { showClocksToggle } = this.state;

    return (
      <>
        {showClocksToggle && (
          <div className="clocks">
            {locations.map(({ location, offset }) => (
              <Clock key={location} location={location} offset={offset} />
            ))}
          </div>
        )}
        <div className="clock__time">
          <button className="clock__btn" onClick={this.handleShowToggleClocks}>
            {showClocksToggle ? 'Hide clocks' : 'Show clocks'}
          </button>
        </div>
      </>
    );
  }
}

export default App;
