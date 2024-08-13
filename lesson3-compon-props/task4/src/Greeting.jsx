import React from 'react';

const Greeting = ({ firstName, lastName, birthDate }) => (
  <div className="greeting">{`My name is ${firstName} ${lastName}. I am ${
    new Date().getFullYear() - new Date(birthDate).getFullYear()
  } years old`}</div>
);

export default Greeting;
