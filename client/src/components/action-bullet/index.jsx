import React from 'react';
import StyledActionBullet from './style';

const ActionBullet = props => (
	<StyledActionBullet onClick={props.onClick}>
		{props.value}
	</StyledActionBullet>
);

export default ActionBullet;