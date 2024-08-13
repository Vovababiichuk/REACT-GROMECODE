import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(author) {
  return (
    <div className="comment">
      <UserInfo name={author.user.name} avatarUrl={author.user.avatarUrl} />
      <div className="comment__text">{author.text}</div>
      <div className="comment__date">{formatDate(author.date)}</div>
    </div>
  );
}

export default Comment;
