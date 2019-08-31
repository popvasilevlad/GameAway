import React from 'react';
import Styled from './style';
import Button from '../button/';
import WinImage from './win-image.png';
import LoseImage from './lose-image.png';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

const GameOverScreen = props => (
	<Styled.Container>
		<Styled.Wrapper>
			{
				props.winner === cookie.load('clientSessionId') ?
					<Styled.WinImage src={WinImage} />
				:
					<Styled.LoseImage src={LoseImage} />
			}
			<div>
			{
				props.winner === cookie.load('clientSessionId') ? 'You won' : 'You lose'
			}
			</div>
			<Button
				handleClick={() => console.log('click')}
			/>
		</Styled.Wrapper>
	</Styled.Container>
);

const mapStateToProps = state => {
	return {
		winner: state.winner
	}
}

export default connect(mapStateToProps)(GameOverScreen);