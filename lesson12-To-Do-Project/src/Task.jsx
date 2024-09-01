import React from 'react';
import classnames from 'classnames';

const Task = ({ text, done, id, onChange, onDelete }) => {

  return (
    <li className={classnames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button onClick={() => onDelete(id)} className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
