//! =====================Function Component===================

// import React, { useEffect, useState } from 'react';
// import UserProfile from './UserProfile';
// import UserMenu from './UserMenu';

// const App = ({ userId = 'github' }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => setUserData(data))
//       .catch(err => console.error(err));
//   }, [userId]);

//   return (
//     <div className="page">
//       <header className="header">
//         <UserMenu userData={userData} />
//       </header>
//       <UserProfile userData={userData} />
//     </div>
//   );
// };

// export default App;

//! =====================Class Component===================

import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const { userId = 'github' } = this.props;
    const baseUrl = `https://api.github.com/users/${userId}`;

    fetch(baseUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => this.setState({ userData: data }))
      .catch(err => console.error('Error fetching user data:', err));
  }

  render() {
    const { userData } = this.state;

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}

export default App;
