//! ==============Function component (useState)================

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

//! ==============Function component (useRef)================

import React, { useRef } from 'react';

const UserForm = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const userData = {
        name: formData.get('name'),
        student: formData.get('student') === 'on',
        occupation: formData.get('occupation'),
        about: formData.get('about'),
      };
      onSubmit(userData);
    }
  };

  return (
    <form ref={formRef} className="login-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Profile</h1>

      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" type="text" id="name" name="name" />
      </div>

      <div className="form-control">
        <label className="form-label" htmlFor="student">
          Student
        </label>
        <input className="form-input" type="checkbox" id="student" name="student" />
      </div>

      <div className="form-control">
        <label className="form-label" htmlFor="occupation">
          Occupation
        </label>
        <select className="form-input" name="occupation">
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
        <textarea className="form-input" name="about" />
      </div>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
