import React, { useEffect } from 'react';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

const Colors = () => {
  const handleSetBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  useEffect(() => {
    const handleBodyClick = e => {
      if (e.target.tagName !== 'BUTTON') {
        handleSetBodyColor('');
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

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

export default Colors;
