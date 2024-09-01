import React, { useEffect } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { createTask, getAllTasks, taskStatusChange, deleteTask } from './tasksGateway.jsx';

const TasksList = () => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);

  const onCreate = text => {
    return createTask(text, setTasks);
  };

  const handleTaskStatusChange = id => {
    const taskToUpdate = tasks.find(task => task.id === id);
    const updatedTask = { ...taskToUpdate, done: !taskToUpdate.done };

    return taskStatusChange(id, updatedTask, setTasks);
  };

  const handleTaskDelete = id => {
    return deleteTask(id, setTasks);
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
