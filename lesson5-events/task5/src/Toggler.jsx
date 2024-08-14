import React from 'react'
import { useState } from 'react';

const Toggler = () => {
  const [toggle, setToggle] = useState('Off');

  const handleToggler = () => {
    setToggle(prevToggler => (prevToggler === 'On' ? 'Off' : 'On'));
  }

  return (
    <div onClick={handleToggler} className="toggler">{toggle}</div>
  )
}

export default Toggler