//! ======================Function Component=====================

// import React from 'react';

// const UserMenu = ({ userData }) => {
// 	if (!userData) {
// 		return null;
// 	}
// 	const { avatar_url: avatarUrl, name } = userData;
//   return (
//     <div className="menu">
//       <span className="menu__greeting">{`Hello, ${name}`}</span>
//       <img
//         alt={`${name}'s Avatar`}
//         src={avatarUrl}
//         className="menu__avatar"
//       />
//     </div>
//   );
// };

// export default UserMenu;

//! ======================Class Component=====================

import React, { Component } from 'react';

class UserMenu extends Component {
  render() {
    const { userData } = this.props;

    if (!userData) {
      return null;
    }

    const { avatar_url: avatarUrl, name } = userData;

    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${name}`}</span>
        <img alt={`${name}'s Avatar`} src={avatarUrl} className="menu__avatar" />
      </div>
    );
  }
}

export default UserMenu;
