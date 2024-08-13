import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo name={props.user.name} avatarUrl={props.user.avatarUrl} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
