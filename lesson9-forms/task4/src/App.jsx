import React, { useState } from 'react';
import UsersList from './UsersList.jsx';

const users = [
  { name: 'Bob', age: 22, id: 1 },
  { name: 'Alex', age: 23, id: 2 },
  { name: 'Ann', age: 21, id: 3 },
  { name: 'John', age: 18, id: 4 },
  { name: 'Kate', age: 32, id: 5 },
  { name: 'Olga', age: 19, id: 6 },
  { name: 'Lora', age: 31, id: 7 },
  { name: 'Viktor', age: 27, id: 8 },
  { name: 'Nikita', age: 24, id: 9 },
  { name: 'Maria', age: 20, id: 10 },
];

const App = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = text => {
    setFilterText(text);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  return <UsersList users={filteredUsers} filterText={filterText} onChange={handleFilterChange} />;
};

export default App;
