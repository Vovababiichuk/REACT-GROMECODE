import React, { useState, useEffect } from 'react';

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const utcOffset = time.getTimezoneOffset() / 60;
  const localTime = new Date(time.getTime() + (offset - utcOffset) * 60 * 60 * 1000);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{localTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
