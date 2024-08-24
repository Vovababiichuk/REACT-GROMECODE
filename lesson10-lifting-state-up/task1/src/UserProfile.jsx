import React, { useState, useEffect } from 'react';
import UserMenu from './UserMenu';

const UserProfile = ({ userId }) => {
  const baseUrl = `https://api.github.com/users/${userId}`;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, [baseUrl]);

  if (!userData) {
    return <div>Loading...</div>;
	}

  const { avatar_url: avatarUrl, location, name } = userData;

  return (
    <div className="page">
      <UserMenu avatarUrl={avatarUrl} name={name} />
      <div className="user">
        <img alt={`${name} Avatar`} src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
