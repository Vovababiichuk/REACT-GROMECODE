import React from 'react';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

const Colors = () => {
  const handleSetBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="counter">
      <button
        onClick={() => handleSetBodyColor(RED)}
        className="colors__button"
        style={{ backgroundColor: RED }}
      ></button>
      <button
        onClick={() => handleSetBodyColor(GREEN)}
        className="colors__button"
        style={{ backgroundColor: GREEN }}
      ></button>
      <button
        onClick={() => handleSetBodyColor(BLUE)}
        className="colors__button"
        style={{ backgroundColor: BLUE }}
      ></button>
    </div>
  );
};

export default Colors;

//! =================================

// import React, { Component } from 'react';

// const RED = 'red';
// const GREEN = 'green';
// const BLUE = 'blue';

// class Colors extends Component {
//   handleSetBodyColor = color => {
//     document.body.style.backgroundColor = color;
//   };

//   render() {
//     return (
//       <div className="counter">
//         <button
//           onClick={() => this.handleSetBodyColor(RED)}
//           className="colors__button"
//           style={{ backgroundColor: RED }}
//         ></button>
//         <button
//           onClick={() => this.handleSetBodyColor(GREEN)}
//           className="colors__button"
//           style={{ backgroundColor: GREEN }}
//         ></button>
//         <button
//           onClick={() => this.handleSetBodyColor(BLUE)}
//           className="colors__button"
//           style={{ backgroundColor: BLUE }}
//         ></button>
//       </div>
//     );
//   }
// }

// export default Colors;

