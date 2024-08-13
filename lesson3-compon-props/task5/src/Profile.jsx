import React from 'react';
import moment from 'moment';
import './Profile.scss';

const formatDate = date => moment(date).format('DD MMM YYYY');

const Profile = ({ userData }) => (
  <div className="profile">
    <span className="profile__name">
      {userData.firstName} {userData.lastName}
    </span>
    <p className="profile__birth">
      Was born {formatDate(userData.birthDate)} in {userData.birthPlace}
    </p>
  </div>
);

export default Profile;
