//! v1 ==================Function Component==================
//! v1 ==================Function Component==================

// import React from 'react';
// import { useState, useEffect } from 'react';

// const User = ({ userId }) => {
//   const [userData, setUserData] = useState({ avatar_url: '', location: '', name: '' });

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(({ avatar_url: avatarUrl, location, name }) => {
//         setUserData({ avatarUrl, location, name });
//       })
//       .catch(err => console.error(err));
//   }, [userId]);

//   return (
//     <div className="user">
//       <img
//         alt={`${userData.name}'s avatar`}
//         src={
//           userData.avatarUrl ||
//           'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
//         }
//         className="user__avatar"
//       />
//       <div className="user__info">
//         <span className="user__name">{userData.name || 'Unknown name '}</span>
//         <span className="user__location">{userData.location || 'Unknown location'}</span>
//       </div>
//     </div>
//   );
// };

// export default User;

//! v2 ==================Function Component (AbortController)==================
//! v2 ==================Function Component (AbortController)==================

// import React, { useState, useEffect } from 'react';

// const User = ({ userId }) => {
//   const [userData, setUserData] = useState({ avatarUrl: '', location: '', name: '' });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     const { signal } = controller;

//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/users/${userId}`, { signal });
//         if (!response.ok) {
//           throw new Error('Мережевий запит не вдався');
//         }
//         const data = await response.json();
//         setUserData({
//           avatarUrl: data.avatar_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
//           location: data.location || 'Невідоме місцезнаходження',
//           name: data.name || 'Невідоме ім’я',
//         });
//         setError(null);
//       } catch (err) {
//         if (err.name !== 'AbortError') {
//           setError('Не вдалося отримати дані користувача');
//         }
//       }
//     };

//     fetchUserData();

//     return () => controller.abort(); // Очищення запиту при демонтажі компонента
//   }, [userId]);

//   return (
//     <div className="user">
//       {error ? (
//         <div className="user__error">{error}</div>
//       ) : (
//         <>
//           <img
//             alt={`${userData.name}'s avatar`}
//             src={userData.avatarUrl}
//             className="user__avatar"
//           />
//           <div className="user__info">
//             <span className="user__name">{userData.name}</span>
//             <span className="user__location">{userData.location}</span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default User;


//! ==================Class Component==================
import React, { Component } from "react";

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((user) => this.setState({ user }));
  };

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }

    const { avatar_url, name, location } = user;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;