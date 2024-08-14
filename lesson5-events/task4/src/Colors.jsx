// import React from 'react';

// const RED = 'red';
// const GREEN = 'green';
// const BLUE = 'blue';

// const Colors = () => {
//   const handleSetBodyColor = color => {
//     document.body.style.backgroundColor = color;
//   };

//   return (
//     <div className="counter">
//       <button
//         onClick={() => handleSetBodyColor(RED)}
//         className="counter__button counter__value"
//         style={{ backgroundColor: RED }}
//       ></button>
//       <button
//         onClick={() => handleSetBodyColor(GREEN)}
//         className="counter__button counter__value"
//         style={{ backgroundColor: GREEN }}
//       ></button>
//       <button
//         onClick={() => handleSetBodyColor(BLUE)}
//         className="counter__button counter__value"
//         style={{ backgroundColor: BLUE }}
//       ></button>
//     </div>
//   );
// };

// export default Colors;


import React, { Component } from 'react';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

class Colors extends Component {
  handleSetBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="counter">
        <button
          onClick={() => this.handleSetBodyColor(RED)}
          className="counter__button counter__value"
          style={{ backgroundColor: RED }}
        ></button>
        <button
          onClick={() => this.handleSetBodyColor(GREEN)}
          className="counter__button counter__value"
          style={{ backgroundColor: GREEN }}
        ></button>
        <button
          onClick={() => this.handleSetBodyColor(BLUE)}
          className="counter__button counter__value"
          style={{ backgroundColor: BLUE }}
        ></button>
      </div>
    );
  }
}

export default Colors;

