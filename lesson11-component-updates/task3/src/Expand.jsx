//! v1

// import React from 'react';

// const Expand = ({ title, children, handleShowContent, isOpen }) => {
//   const renderIcon = () => {
//     return isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>;
//   };

//   return (
//     <div className="expand border">
//       <div className="expand__header">
//         <span className="expand__title">{title}</span>
//         <button onClick={handleShowContent} className="expand__toggle-btn">
//           {renderIcon()}
//         </button>
//       </div>
//       {isOpen && <div className="expand__content">{children}</div>}
//     </div>
//   );
// };

// export default Expand;

//! v2

import React, { useState } from 'react';

const Expand = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowContent = () => {
    setIsOpen(prevState => !prevState);
  };

  const renderIcon = () => {
    return isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>;
  };

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={handleShowContent} className="expand__toggle-btn">
          {renderIcon()}
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

export default Expand;
