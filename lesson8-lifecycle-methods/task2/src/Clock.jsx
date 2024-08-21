//! ==========================Function Component===========================

// import React, { useState, useEffect } from 'react';
// import moment from 'moment';

// const getTimeWithOffset = offset => {
//   return moment()
//     .utcOffset(offset * 60)
//     .format('h:mm:ss A');
// };

// const Clock = ({ location, offset }) => {
//   const [time, setTime] = useState(getTimeWithOffset(offset));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(getTimeWithOffset(offset));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [offset]);

//   return (
//     <div className="clock">
//       <div className="clock__location">{location}</div>
//       <div className="clock__time">{time}</div>
//     </div>
//   );
// };

// export default Clock;

//! ==========================Class Component===========================

import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  return moment()
    .utcOffset(offset * 60)
    .format('h:mm:ss A');
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(this.props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: getTimeWithOffset(this.props.offset) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { location } = this.props;
    const { time } = this.state;

    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{time}</div>
      </div>
    );
  }
}

export default Clock;
