import React from 'react';

const OddNumbers = ({ title, number }) => {
	if (number % 2 === 0) {
		return null;
	}

  return (
    <div class="number">
      <span class="number__title">{title}</span>
      <span class="number__value">{number}</span>
    </div>
  );
};

export default OddNumbers;
