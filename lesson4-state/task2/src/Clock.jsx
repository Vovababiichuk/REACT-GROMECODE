import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formateDate = date => moment(date).format('h:mm:ss A');

const Clock = ({ location, offset}) => {
  const [time, setTime] = useState(formateDate(getTimeWithOffset(offset)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => formateDate(getTimeWithOffset(offset)));
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
