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
//     document.title = `${width}px - ${height}px`;
//   }, [width, height]);

//   return (
//     <div>
//       {width}px - {height}px
//     </div>
//   );
// };

// export default Dimensions;

//! ==================Class Component==================
import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    document.title = `${this.state.width}px - ${this.state.height}px`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.width !== this.state.width || prevState.height !== this.state.height) {
      document.title = `${this.state.width}px - ${this.state.height}px`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { width, height } = this.state;
    return <div className="dimensions">{`${width}px - ${height}px`}</div>;
  }
}

export default Dimensions;
