import React from 'react';
import moment from 'moment';
import './Profile.scss';

const Profile = userData => {
  const date = moment(userData.user.birthDate).format('DD MMM YYYY');
  return (
    <div>
      <span className="profile__name">
        {userData.user.firstName} {userData.user.lastName}
      </span>
      <p className="profile__birth">
        Was born {date} in {userData.user.birthPlace}
      </p>
    </div>
  );
};

export default Profile;
