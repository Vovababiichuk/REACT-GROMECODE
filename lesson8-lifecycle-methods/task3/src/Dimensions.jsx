//! ==================Function Component==================

// import React, { useState, useEffect } from 'react';

// const Dimensions = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     document.title = `${width} - ${height}`;
//   }, [width, height]);

//   return (
//     <div>
//       {width} x {height}
//     </div>
//   );
// };

// export default Dimensions;

//! ==================Class Component==================
import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.title = `${this.state.width} - ${this.state.height}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.width !== this.state.width || prevState.height !== this.state.height) {
      document.title = `${this.state.width} - ${this.state.height}`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { width, height } = this.state;
    return (
      <div>
        {width} - {height}
      </div>
    );
  }
}

export default Dimensions;
