import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

const UsersList = ({ users, currentPage, itemsPerPage, goNext, goPrev }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
      />

      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
