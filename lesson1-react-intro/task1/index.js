/* eslint-disable no-undef */

// put your code here
const rootElement = document.querySelector('#root');

const element = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(element, rootElement);