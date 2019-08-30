import React from 'react';
import StyledFooter from './style'
import ActionBullet from '../action-bullet/';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

const Footer = props => {
	if (props.player_2 < 2) {
		return (
			<StyledFooter>
				Waiting for an opponent to join
			</StyledFooter>
		);
	}

	if (props.last_edit === cookie.load('clientSessionId')) {
		return (
			<StyledFooter>
				Waiting for your opponent's move.
			</StyledFooter>
		);
	}

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
		player_2: state.player_2,
		last_edit: state.last_edit
	}
}

export default connect(mapStateToProps)(Footer);