// import React from 'react';
// import User from './User.jsx';
// import Filter from './Filter.jsx';

// const UsersList = ({ users, filterText, onChange }) => {
//   return (
//     <div>
//       <Filter filterText={filterText} count={users.length} onChange={onChange} />
//       <ul className="users">
//         {users.map(user => (
//           <User key={user.id} {...user} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;


import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  render() {
    const { users, filterText, onChange } = this.props;

    return (
      <div>
        <Filter filterText={filterText} count={users.length} onChange={onChange} />
        <ul className="users">
          {users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
