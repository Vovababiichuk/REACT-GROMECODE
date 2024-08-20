import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-GB').format(amount);
  };

  const formatTime = (time) => {
    return moment(time).format('HH:mm');
  };

  const formatDate = (date) => {
    return moment(date).format('D MMM');
  }

  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">
        {from} &rarr; {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatAmount(amount)}</span>
    </li>
  );
};

export default Transaction;
