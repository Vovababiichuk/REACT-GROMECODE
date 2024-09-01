const baseUrl = 'https://66d4dcfe5b34bcb9ab3f9e54.mockapi.io/api/v1/tasks';

export const createTask = (text, setTasks) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      done: false,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setTasks(prevTasks => [...prevTasks, data]);
    })
    .catch(err => {
      console.error('There was a problem with the fetch operation:', err);
    });
};

export const getAllTasks = setTasks => {
  fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setTasks(data))
    .catch(err => {
      console.error('There was a problem with the fetch operation:', err);
    });
};

export const taskStatusChange = (id, updatedTask, setTasks) => {
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setTasks(prevTasks => prevTasks.map(task => (task.id === id ? data : task)));
    })
    .catch(err => {
      console.error('There was a problem with the fetch operation:', err);
    });
};

export const deleteTask = (id, setTasks) => {
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    })
    .catch(err => {
      console.error('There was a problem with the fetch operation:', err);
    });
};
