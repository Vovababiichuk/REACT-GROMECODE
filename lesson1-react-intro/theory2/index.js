const rootElement = document.getElementById('root')

const element = React.createElement(
	'div',
	{ className: 'greeting' },
	React.createElement('div', { className: 'title' }, 'Hello, World!'),
	React.createElement('div', { className: 'text' }, "I'm learning React!")
)

ReactDOM.render(element, rootElement)
