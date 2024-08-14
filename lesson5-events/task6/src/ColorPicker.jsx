import React from 'react';
import { useRef } from 'react';

const ColorPicker = () => {
  const titleRef = useRef(null);
  const buttonCoral = useRef(null);
  const buttonAqua = useRef(null);
  const buttonBisque = useRef(null);

  const handleMouseEnter = color => {
    titleRef.current.textContent = color;
  };

  const handleMouseLeave = () => {
    titleRef.current.textContent = '';
  };

  return (
    <div>
      <div ref={titleRef} className="picker__title">
        Red
      </div>
      <div>
        <button
          ref={buttonCoral}
          onMouseEnter={() => handleMouseEnter('Coral')}
          onMouseLeave={handleMouseLeave}
          className="picker__button picker__button_coral"
        ></button>
        <button
          ref={buttonAqua}
          onMouseEnter={() => handleMouseEnter('Aqua')}
          onMouseLeave={handleMouseLeave}
          className="picker__button picker__button_aqua"
        ></button>
        <button
          ref={buttonBisque}
          onMouseEnter={() => handleMouseEnter('Bisque')}
          onMouseLeave={handleMouseLeave}
          className="picker__button picker__button_bisque"
        ></button>
      </div>
    </div>
  );
};

export default ColorPicker;
