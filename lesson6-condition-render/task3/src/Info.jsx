import React from 'react';

const Info = ({ info }) => {
  return (
    info && (
      <div className="info">{info}</div>
    )
  );
};

export default Info;
