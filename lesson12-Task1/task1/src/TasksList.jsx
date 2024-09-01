import React, { useState } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';

const TasksList = () => {
  const [tasks, setTasks] = React.useState([
    { text: 'Learn React', done: false, id: 1 },
    { text: 'Learn HTML / CSS', done: false, id: 2 },
    { text: 'Learn JavaScript', done: true, id: 3 },
    { text: 'Learn Dev Tools', done: true, id: 4 },
  ]);

  const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);

  const onCreate = text => {
    setTasks(prevTasks => [...prevTasks, { text, done: false, id: Math.random() }]);
  };

  const handleTaskStatusChange = id => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      }),
    );
  };

  const handleTaskDelete = id => {
    return setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <>
      <CreateTaskInput onCreate={onCreate} />
      <ul className="list">
        {sortedTasks.map(task => (
          <Task
            key={task.id}
            {...task}
            onChange={handleTaskStatusChange}
            onDelete={handleTaskDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default TasksList;
