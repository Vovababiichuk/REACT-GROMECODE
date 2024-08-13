import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment({ text, date, author: { name, avatarUrl } }) {
  return (
    <div className="comment">
      <div className="user-info">
        <UserInfo name={name} avatarUrl={avatarUrl} />
        <div className="user-info__name">{name}</div>
      </div>
      <div className="comment__text">{text}</div>
      <div className="comment__date">{formatDate(date)}</div>
    </div>
  );
}

export default Comment;
