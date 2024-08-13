import React from 'react';
import './avatar.scss';

const Avatar = ({ name, avatarUrl }) => <img className="avatar" src={avatarUrl} alt={name} />;

export default Avatar;
