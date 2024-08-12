import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.getElementById('root');

const element = (
  <div className="greeting">
    <div className="title">Hello, World!</div>
    <div className="text">I'm learning React!</div>
  </div>
);

ReactDOM.render(element, rootElement);
