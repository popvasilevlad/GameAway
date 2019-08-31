import React from 'react';
import StyledContainer from './style';
import UserAvatar from '../avatar/';
import ActionBullet from '../action-bullet/';
import MessageBox from '../message-box/';
import GameOverScreen from '../game-over-screen/';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

const {
	Wrapper,
	MessageGroup,
	Avatar,
	ResponseMessagesContainer,
	EntriesWrapper
} = StyledContainer;

const Container = props => {
	const playerId = cookie.load('clientSessionId');

	return (
		<Wrapper>
			{ props.winner && <GameOverScreen />}
			<EntriesWrapper>
			{
				props.entries.map((entry,i) => (
					<MessageGroup
						direction={entry.author === playerId ? 'right' : 'left'}
						key={`message-group-${i}`}
					>
						<Avatar>
							<UserAvatar
								theme={entry.author !== playerId ? 'default' : 'active'}
							/>
						</Avatar>
						<ResponseMessagesContainer
							direction={entry.author === playerId ? 'right' : 'left'}
						>
								{entry.added_value && <ActionBullet value={entry.added_value}/>}
								{entry.formula && <MessageBox text={entry.formula} />}
								{entry.result && <MessageBox text={entry.result} />}
						</ResponseMessagesContainer>
					</MessageGroup>
				))
			}
			</EntriesWrapper>
		</Wrapper>
	)
};

const mapStateToProps = state => {
	return {
		winner: state.winner,
		entries: state.entries,
		align: state.align
	}
}

export default connect(mapStateToProps, '')(Container);