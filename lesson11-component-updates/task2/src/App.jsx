//! =================Function component=================

// import React, { useState } from 'react';
// import Dialog from './Dialog';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleHide = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="app">
//       <button onClick={handleOpen} className="btn">
//         Show dialog
//       </button>
//       {isOpen && (
//         <Dialog onClose={handleHide} title="Recommendation">
//           <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default App;

//! =================Class component===================

import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog onClose={this.hideDialog} isOpen={this.state.isOpen} title="Recommendation">
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;
        </Dialog>
      </div>
    );
  }
}

export default App;
