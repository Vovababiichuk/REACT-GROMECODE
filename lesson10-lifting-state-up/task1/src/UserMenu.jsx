import React from 'react';

const UserMenu = ({ avatarUrl, name }) => {
  if (!avatarUrl || !name) {
    return null;
  }

  return (
    <header className="header">
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${name}`}</span>
        <img
          alt={`${name} Avatar`}
          src={avatarUrl}
          className="menu__avatar"
        />
      </div>
    </header>
  );
};

export default UserMenu;
