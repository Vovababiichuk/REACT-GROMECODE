// import React, { useState } from 'react';

// const Filter = ({ filterText, count, onChange }) => {
//   const [value, setValue] = useState(filterText);

//   const handleChange = e => {
//     setValue(e.target.value);
//     onChange(e.target.value);
//   };

//   return (
//     <div className="filter">
//       <span className="filter__count">{count}</span>
//       <input
//         onChange={handleChange}
//         type="text"
//         className="filter__input"
//         value={value}
//       />
//     </div>
//   );
// };

// export default Filter;


import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.filterText
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value); // Вызов функции при изменении текста
  };

  render() {
    const { count } = this.props;
    const { value } = this.state;

    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          onChange={this.handleChange}
          type="text"
          className="filter__input"
          value={value}
        />
      </div>
    );
  }
}

export default Filter;
