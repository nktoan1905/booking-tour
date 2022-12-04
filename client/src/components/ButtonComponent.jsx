import React from 'react';
export default function ButtonComponent(props) {
	return (
		<button
			onClick={props.onClick}
			className={`btn sc-blue-pale border-0 btn-info rounded-pill text-uppercase fw-bold`}
			style={{ color: 'white', width: '100%', height: '50px' }}>
			{props.label}
		</button>
	);
}
