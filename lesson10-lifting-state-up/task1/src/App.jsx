import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';


const App = ({ userId = 'github' }) => {
  const [userData, setUserData] = useState(null);
  const baseUrl = `https://api.github.com/users/${userId}`;

  useEffect(() => {
    fetch(baseUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setUserData(data))
      .catch(err => console.error(err));
  }, [baseUrl]);

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
