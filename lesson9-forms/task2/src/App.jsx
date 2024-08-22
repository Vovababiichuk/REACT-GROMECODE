import React from 'react';
import UserForm from './UserForm.jsx';

const App = () => {
  const createUser = (users) => {
    console.log(users);
  }
  return (
    <UserForm createUser={createUser} />
  );
};

export default App;
