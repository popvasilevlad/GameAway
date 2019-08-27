import React from 'react';
import StyledButton from './style';

const Button = props => (
	<StyledButton
		onClick={props.handleClick}
	>
		New Game
	</StyledButton>
);

export default Button;