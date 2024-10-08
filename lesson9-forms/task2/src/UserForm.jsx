//! ==============Function component================

// import React, { useState } from 'react';

// const UserForm = ({ createUser }) => {
// 	const [value, setValue] = useState({
// 		name: '',
// 		student: false,
// 		occupation: '',
// 		about: '',
// 	});

// 	const handleOnChange = (e) => {
// 		const { name, value, checked, type } = e.target;

// 		const val = type === 'checkbox' ? checked : value;

// 		setValue(prevValue => ({
// 			...prevValue,
// 			[name]: val,
// 		}));
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		createUser(value);
// 	}

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h1 className="form-title">Profile</h1>

//       <div className="form-control">
//         <label className="form-label" htmlFor="name">
//           Name
//         </label>
//         <input onChange={handleOnChange} className="form-input" type="text" id="name" name="name" value={value.name} />
//       </div>

//       <div className="form-control">
//         <label className="form-label" htmlFor="student">
//           Student
//         </label>
//         <input onChange={handleOnChange} className="form-input" type="checkbox" id="student" name="student" checked={value.student} />
//       </div>

//       <div className="form-control">
//         <label className="form-label" id="occupation" htmlFor="occupation">
//           Occupation
//         </label>
//         <select onChange={handleOnChange} name="occupation" className="form-input" value={value.occupation}	>
//           <option value="london">London</option>
//           <option value="new-york">New York</option>
//           <option value="sidney	">Sidney</option>
//           <option value="berlin">Berlin</option>
//         </select>
//       </div>

//       <div className="form-control">
//         <label className="form-label" id="about" htmlFor="about">
//           About
//         </label>
//         <textarea onChange={handleOnChange} name="about" className="form-input" value={value.about} />
//       </div>

//       <button className="submit-button" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default UserForm;

//! ==========Class Component==========

import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      student: false,
      occupation: '',
      about: '',
    };
  }

  handleOnChange = e => {
    const { name, value, checked, type } = e.target;
    const val = type === 'checkbox' ? checked : value;

    this.setState(prevState => ({
      ...prevState,
      [name]: val,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, student, occupation, about } = this.state;
    this.props.onSubmit({ name, student, occupation, about });
  };

  render() {
    const { name, student, occupation, about } = this.state;

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.handleOnChange}
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            onChange={this.handleOnChange}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            checked={student}
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="occupation">
            Occupation
          </label>
          <select
            onChange={this.handleOnChange}
            name="occupation"
            className="form-input"
            value={occupation}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="about">
            About
          </label>
          <textarea
            onChange={this.handleOnChange}
            name="about"
            className="form-input"
            value={about}
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
