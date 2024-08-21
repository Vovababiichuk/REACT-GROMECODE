import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.title = `${width} - ${height}`;
  }, [width, height]);

  return (
    <div>
      {width} x {height}
    </div>
  );
};

export default Dimensions;
