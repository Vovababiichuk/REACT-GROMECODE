import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  return moment()
    .utcOffset(offset * 60)
    .format('h:mm:ss A');
};

const Clock = ({ location, offset }) => {
  console.log('Clock rendered');
  const [time, setTime] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    console.log('EFFECT CALLED');
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    return () => clearInterval(interval);
  }, [offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;