const rootElement = document.getElementById('root');

const greetingElem = React.createElement ('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElem, rootElement);