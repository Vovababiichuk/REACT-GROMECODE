import React, { useState } from 'react';
import Dialog from './Dialog';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleHide = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <button onClick={handleOpen} className="btn">
        Show dialog
      </button>
      {isOpen && (
        <Dialog onClose={handleHide} title="Recommendation">
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      )}
    </div>
  );
};

export default App;
