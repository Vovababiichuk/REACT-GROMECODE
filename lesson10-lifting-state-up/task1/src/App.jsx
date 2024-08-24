//! =====================Function Component===================

import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

const App = ({ userId = 'github' }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setUserData(data))
      .catch(err => console.error(err));
  }, [userId]);

  return (
    <div className="page">
      <header className="header">
        <UserMenu userData={userData} />
      </header>
      <UserProfile userData={userData} />
    </div>
  );
};

export default App;

//! =====================Class Component===================

// import React, { Component } from "react";
// import UserProfile from "./UserProfile.jsx";
// import UserMenu from "./UserMenu.jsx";

// class Page extends Component {
//   state = {
//     userData: null,
//   };

//   componentDidMount() {
//     this.fetchUserData(this.props.userId);
//   }

//   fetchUserData = (userId) => {
//     const userUrl = `https://api.github.com/users/${userId}`;
//     fetch(userUrl)
//       .then((response) => response.json())
//       .then((userData) => {
//         this.setState({
//           userData,
//         });
//       });
//   };
//   render() {
//     return (
//       <div className="page">
//         <header className="header">
//           <UserMenu userData={this.state.userData} />
//         </header>
//         <UserProfile userData={this.state.userData} />
//       </div>
//     );
//   }
// }

// export default Page;