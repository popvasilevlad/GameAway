import React from 'react';
import StyledContainer from './style';
import Avatar from '../avatar/';
import ActionBullet from '../action-bullet/';
import MessageBox from '../message-box/';
import GameOverScreen from '../game-over-screen/';

const Container = props => (
	<StyledContainer.Wrapper>
		<GameOverScreen />
		<StyledContainer.MessageGroup
			direction={'left'}
		>
			<StyledContainer.Avatar>
				<Avatar />
			</StyledContainer.Avatar>
			<StyledContainer.ResponseMessagesContainer
				direction={'left'}
			>
				<ActionBullet value={1}/>
				<MessageBox text={'[(-1 + 19 ) / 3] = 6'} />
				<MessageBox text={'6'} />
			</StyledContainer.ResponseMessagesContainer>
		</StyledContainer.MessageGroup>

		<StyledContainer.MessageGroup
			direction={'right'}
		>
			<StyledContainer.Avatar>
				<Avatar />
			</StyledContainer.Avatar>
			<StyledContainer.ResponseMessagesContainer
				direction={'right'}
			>
				<ActionBullet value={1}/>
				<MessageBox text={'[(-1 + 19 ) / 3] = 6'} />
				<MessageBox text={'6'} />
			</StyledContainer.ResponseMessagesContainer>
		</StyledContainer.MessageGroup>
	</StyledContainer.Wrapper>
);

export default Container;