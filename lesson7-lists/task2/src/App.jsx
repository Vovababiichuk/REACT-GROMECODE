import React from 'react';

const numbers = [1, 2, 3];

const App = () => {
	return (
		<div>
			<ul>
				{numbers.map(num => (
					<li key={num}>{num}</li>
				))}
			</ul>
		</div>
	)
};

export default App;
