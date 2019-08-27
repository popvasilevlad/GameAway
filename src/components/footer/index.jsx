import React from 'react';
import StyledFooter from './style'
import ActionBullet from '../action-bullet/';
import { connect } from 'react-redux';

const Footer = props => {
	if (props.over) return false;

	return (
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
	);
}

const mapStateToProps = state => {
	return {
		over: state.over
	}
}

export default connect(mapStateToProps)(Footer);