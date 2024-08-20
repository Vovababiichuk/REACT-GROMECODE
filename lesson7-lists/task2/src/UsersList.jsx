import React, { useState } from 'react';
import User from './User.jsx';

const UsersList = ({ users }) => {
  const [btnText, setBtnText] = useState('-');
  const [sortedUsers, setSortedUsers] = useState(users);

  const handleToggleSort = () => {
    setBtnText(btnText === 'asc' ? 'desc' : 'asc');
    setSortedUsers(prevUsers =>
      [...prevUsers].sort((a, b) => (btnText === 'asc' ? b.age - a.age : a.age - b.age)),
    );
  };

  return (
    <div>
      <button onClick={handleToggleSort} className="btn">
        {btnText}
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
