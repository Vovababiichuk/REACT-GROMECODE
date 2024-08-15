import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox__text">
      Messages
      {unreadMessages.length > 0 ? <span className="mailbox__count">{unreadMessages}</span> : ''}
    </div>
  );
};

export default Mailbox;
