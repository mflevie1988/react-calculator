import React from 'react';
import './Button.styles.css';

const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};

export const Button = (props) => (
	<div
		className={`button-wrapper ${
			isOperator(props.children) ? '' : 'operator'
		}`}
		onClick={() => props.handleClick(props.children)}
	>
		{props.children}
	</div>
);
