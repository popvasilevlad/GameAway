import React from 'react';
import Styled from './style';
import Button from '../button/';
import WinImage from './win-image.png';
import LoseImage from './lose-image.png';
import { connect } from 'react-redux';

const GameOverScreen = props => (
	<Styled.Container>
		<Styled.Wrapper>
			{
				props.win ?
					<Styled.WinImage src={WinImage} />
				:
					<Styled.LoseImage src={LoseImage} />
			}
			<div>
			{
				props.win ? 'You won' : 'You lose'
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
		win: state.win
	}
}

export default connect(mapStateToProps)(GameOverScreen);