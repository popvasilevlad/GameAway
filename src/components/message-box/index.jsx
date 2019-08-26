import React from 'react';
import StyledMessageBox from './style';

const MessageBox = props => (
	<StyledMessageBox>
		{props.text}
	</StyledMessageBox>
)

export default MessageBox;