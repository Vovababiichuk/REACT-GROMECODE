import React from 'react';
import UsersList from './UsersList.jsx';
import { useState } from 'react';

const users = [
  { id: 'id-0', age: 21, name: 'Bob' },
  { id: 'id-1', age: 17, name: 'Tom' },
  { id: 'id-2', age: 18, name: 'Tad' },
  { id: 'id-3', age: 45, name: 'Sam' },
  { id: 'id-4', age: 32, name: 'John' },
  { id: 'id-5', age: 27, name: 'Mick' },
	{ id: 'id-6', age: 35, name: 'Tod' },
	{ id: 'id-7', age: 19, name: 'Sally' },
	{ id: 'id-8', age: 33, name: 'Bill' },
	{ id: 'id-9', age: 26, name: 'Kate' },
	{ id: 'id-10', age: 30, name: 'Alex' },
	{ id: 'id-11', age: 21, name: 'Bob' },
];

const App = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;

	const goNext = () => {
		setCurrentPage(prevPage => prevPage + 1);
	}

	const goPrev = () => {
		setCurrentPage(prevPage => prevPage - 1);
	}

  return (
    <UsersList
      users={users}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      goNext={goNext}
      goPrev={goPrev}
    />
  );
};

export default App;
