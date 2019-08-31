import React from 'react';
import Styled from './style';
import Button from '../button/';
import WinImage from './win-image.png';
import LoseImage from './lose-image.png';
import DrawImage from './draw-image.png';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { startNewGame } from '../../actions';

const GameOverScreen = props => (
	<Styled.Container>
		<Styled.Wrapper>
			{
				props.winner === cookie.load('clientSessionId') ?
					<Styled.WinImage src={WinImage} />
				:
					props.winner === 'draw' ? 
						<Styled.LoseImage src={DrawImage} />
					:
						<Styled.LoseImage src={LoseImage} />
			}
			<div>
			{
				props.winner === cookie.load('clientSessionId') ? 
					'You won'
				: props.winner === 'draw' ? 
					'Draw'
					:
					'You lose'
			}
			</div>
			<Button
				handleClick={() => startNewGame()}
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