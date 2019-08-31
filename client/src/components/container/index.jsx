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
		{
			props.entries.map((entry, i) => (
				<MessageGroup
					direction={i%2 === 0 ? 'left' : 'right'}
					key={`message-group-${i}`}
				>
					<Avatar>
						<UserAvatar />
					</Avatar>
					<ResponseMessagesContainer
						direction={i%2 === 0 ? 'left' : 'right'}
					>
							{entry.added_value && <ActionBullet value={entry.added_value}/>}
							{entry.formula && <MessageBox text={entry.formula} />}
							{entry.result && <MessageBox text={entry.result} />}
					</ResponseMessagesContainer>
				</MessageGroup>
			))
		}
	</Wrapper>
);

const mapStateToProps = state => {
	return {
		over: state.over,
		entries: state.entries,
		align: state.align
	}
}

export default connect(mapStateToProps, '')(Container);