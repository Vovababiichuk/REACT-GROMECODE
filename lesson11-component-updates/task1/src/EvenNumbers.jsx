//! ===============Function component==============

// import React from 'react';

// const EvenNumbers = ({ title, number }) => {
// 	if (number % 2 !== 0) {
// 		return null;
// 	}

//   return (
//     <div class="number">
//       <span class="number__title">{title}</span>
//       <span class="number__value">{number}</span>
//     </div>
//   );
// };

// export default EvenNumbers;

//! ===============Class component==============

import React, { Component } from 'react';

class EvenNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}
export default EvenNumbers;
