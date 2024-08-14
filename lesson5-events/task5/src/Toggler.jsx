import React from 'react'
import { useState } from 'react';

const Toggler = () => {
  const [toggle, setToggle] = useState('off');

  const handleToggler = () => {
    setToggle(prevToggler => (prevToggler === 'on' ? 'off' : 'on'));
  }

  return (
    <div onClick={handleToggler} className="toggler">{toggle}</div>
  )
}

export default Toggler