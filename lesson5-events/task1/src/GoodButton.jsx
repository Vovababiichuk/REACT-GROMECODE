import React from 'react';

const GoodButton = () => {
	const handleClick = () => {
		alert('Good job!');
	}

	return (
		<button onClick={handleClick} className="fancy-button">Click me!</button>
	)
}

export default GoodButton