import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://api.github.com/users';

const User = () => {
  const [userData, setUserData] = useState({});

  const { userId } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Could not fetch ${userId}, received ${res.status}`);
        }
        return res.json();
      })
      .then(data => setUserData(data))
      .catch(err => console.error(err));
  }, [userId]);

  const { name, location, avatar_url: avatarUrl } = userData;
  
  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
