import React, { useState } from 'react';

const Filter = ({ filterText, count, onChange }) => {
  const [value, setValue] = useState(filterText);

  const handleChange = e => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        onChange={handleChange}
        type="text"
        className="filter__input"
        value={value}
      />
    </div>
  );
};

export default Filter;
