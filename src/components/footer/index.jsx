import React from 'react';
import StyledFooter from './style'
import ActionBullet from '../action-bullet/';

const Footer = () => (
	<StyledFooter>
		<ActionBullet
			value={-1}
		/>
		<ActionBullet
			value={0}
			onClick={() => console.log('0')}
		/>
		<ActionBullet
			value={1}
			onClick={() => console.log('1')}
		/>
	</StyledFooter>
)

export default Footer;