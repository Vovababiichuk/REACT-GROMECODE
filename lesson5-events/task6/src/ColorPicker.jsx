// import React from 'react';
// import { useRef } from 'react';

// const ColorPicker = () => {
//   const titleRef = useRef(null);
//   const buttonCoral = useRef(null);
//   const buttonAqua = useRef(null);
//   const buttonBisque = useRef(null);

//   const handleMouseEnter = color => {
//     titleRef.current.textContent = color;
//   };

//   const handleMouseLeave = () => {
//     titleRef.current.textContent = '';
//   };

//   return (
//     <div>
//       <div ref={titleRef} className="picker__title">
//       </div>
//       <div>
//         <button
//           ref={buttonCoral}
//           onMouseEnter={() => handleMouseEnter('Coral')}
//           onMouseLeave={handleMouseLeave}
//           className="picker__button picker__button_coral"
//         ></button>
//         <button
//           ref={buttonAqua}
//           onMouseEnter={() => handleMouseEnter('Aqua')}
//           onMouseLeave={handleMouseLeave}
//           className="picker__button picker__button_aqua"
//         ></button>
//         <button
//           ref={buttonBisque}
//           onMouseEnter={() => handleMouseEnter('Bisque')}
//           onMouseLeave={handleMouseLeave}
//           className="picker__button picker__button_bisque"
//         ></button>
//       </div>
//     </div>
//   );
// };

// export default ColorPicker;

//! Class Component

import React from 'react';

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Red',
    };
  }

  handleMouseEnter = color => {
    this.setState({ title: color });
  };

  handleMouseLeave = () => {
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__title">{this.state.title}</div>
        <div className="picker__buttons">
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.handleMouseEnter('Coral')}
            onMouseLeave={this.handleMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.handleMouseEnter('Aqua')}
            onMouseLeave={this.handleMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.handleMouseEnter('Bisque')}
            onMouseLeave={this.handleMouseLeave}
          ></button>
        </div>
      </div>
    );
  }
}
