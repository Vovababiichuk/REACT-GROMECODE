import React, { useState } from 'react';
import User from './User.jsx';

const UsersList = ({ users }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [sortedUsers, setSortedUsers] = useState(users);

  const handleToggleSort = () => {
    setIsAsc(!isAsc);
    setSortedUsers(prevUsers =>
      [...prevUsers].sort((a, b) => (isAsc ? a.age - b.age : b.age - a.age)),
    );
  };

  return (
    <div>
      <button onClick={handleToggleSort} className="btn">
        {isAsc ? 'asc' : 'desc'}
      </button>
      <ul className="users">
        {sortedUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
