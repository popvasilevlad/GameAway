import React from 'react';
import StyledButton from './style';

const Button = props => (
	<StyledButton
		onClick={props.handleClick}
	>
		{props.text}
	</StyledButton>
);

export default Button;