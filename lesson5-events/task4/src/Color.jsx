import React from 'react';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';
const bodyColorBg = document.querySelector('body');

const Color = () => {
  const handleSetBodyColor = color => {
    bodyColorBg.style.backgroundColor = color;
  };

  bodyColorBg.addEventListener('click', () => {
    handleSetBodyColor('');
  })

  return (
    <div className="counter">
      <button
        onClick={() => handleSetBodyColor(RED)}
        className="counter__button counter__value"
        style={{ backgroundColor: RED }}
      ></button>
      <button
        onClick={() => handleSetBodyColor(GREEN)}
        className="counter__button counter__value"
        style={{ backgroundColor: GREEN }}
      ></button>
      <button
        onClick={() => handleSetBodyColor(BLUE)}
        className="counter__button counter__value"
        style={{ backgroundColor: BLUE }}
      ></button>
    </div>
  );
};

export default Color;
