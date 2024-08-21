import React from 'react';
import { useState } from 'react';

const Dimensions = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [])

	document.title = `${width} - ${height}`
	return (
		<div>
			{width} x {height}
		</div>
	)
}

export default Dimensions