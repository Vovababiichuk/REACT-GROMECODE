//! ======================Function Component=====================

// import React from 'react';

// const UserProfile = ({ userData }) => {
// 	if (!userData) {
// 		return null;
// 	}
// 	const { avatar_url: avatarUrl, location, name } = userData;
//   return (
//     <div className="user">
//       <img
//         alt={`${name}'s Avatar`}
//         src={avatarUrl}
//         className="user__avatar"
//       />
//       <div className="user__info">
//         <span className="user__name">{name}</span>
//         <span className="user__location">{location}</span>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

//! ======================Class Component=====================

import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { userData } = this.props;

    if (!userData) {
      return null;
    }

    const { avatar_url: avatarUrl, location, name } = userData;

    return (
      <div className="user">
        <img
          alt={`${name}'s Avatar`}
          src={avatarUrl}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;

