import React from 'react'

const Info = ({ info }) => {
	return (
		info &&
			<div className="message">{info}</div>
	)
}

export default Info