import React from 'react';
import StyledContainer from './style';
import UserAvatar from '../avatar/';
import ActionBullet from '../action-bullet/';
import MessageBox from '../message-box/';
import GameOverScreen from '../game-over-screen/';
import { connect } from 'react-redux';

const {
	Wrapper,
	MessageGroup,
	Avatar,
	ResponseMessagesContainer
} = StyledContainer;

const Container = props => (
	<Wrapper>
		{ props.over && <GameOverScreen />}
		<MessageGroup
			direction={'left'}
		>
			<Avatar>
				<UserAvatar />
			</Avatar>
			<ResponseMessagesContainer
				direction={'left'}
			>
				<ActionBullet value={1}/>
				<MessageBox text={'[(-1 + 19 ) / 3] = 6'} />
				<MessageBox text={'6'} />
			</ResponseMessagesContainer>
		</MessageGroup>

		<MessageGroup
			direction={'right'}
		>
			<Avatar>
				<Avatar />
			</Avatar>
			<ResponseMessagesContainer
				direction={'right'}
			>
				<ActionBullet value={1}/>
				<MessageBox text={'[(-1 + 19 ) / 3] = 6'} />
				<MessageBox text={'6'} />
			</ResponseMessagesContainer>
		</MessageGroup>
	</Wrapper>
);

const mapStateToProps = state => {
	return {
		over: state.over
	}
}

export default connect(mapStateToProps, '')(Container);