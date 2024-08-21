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
import React, { Component } from "react";

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth}px - ${innerHeight}px`;
  };

  render() {
    return (
      <div className="dimensions">
        {`${this.state.width}px - ${this.state.height}px`}
      </div>
    );
  }
}

export default Dimensions;
