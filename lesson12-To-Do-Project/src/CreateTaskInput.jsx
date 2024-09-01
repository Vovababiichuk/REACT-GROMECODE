import React from 'react';

const CreateTaskInput = ({ onCreate }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChangeTaskValue = e => {
    setInputValue(e.target.value);
  };

  const handleTaskCreate = () => {
    onCreate(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTaskCreate();
    }
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputValue}
        onChange={handleChangeTaskValue}
        onKeyPress={handleKeyPress}
      />
      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
