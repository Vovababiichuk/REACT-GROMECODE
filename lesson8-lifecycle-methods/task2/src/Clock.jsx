import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = ({ locations }) => {
  console.log('Clock rendered');
  const [times, setTimes] = useState({});

  useEffect(() => {
    console.log('EFFECT worked');
    const updateTimes = () => {
      const newTimes = locations.reduce((acc, { location, offset }) => {
        acc[location] = moment()
          .utcOffset(offset * 60)
          .format('hh:mm:ss A');
        return acc;
      }, {});

      setTimes(newTimes);
    };

    // Оновлюємо час при монтуванні компонента
    updateTimes();

    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, [locations]);

  return (
    <div className="clocks">
      {locations.map(({ location }) => (
        <div className="clock" key={location}>
          <div className="clock__location">{location}</div>
          <div className="clock__time">{times[location]}</div>
        </div>
      ))}
    </div>
  );
};

export default Clock;
