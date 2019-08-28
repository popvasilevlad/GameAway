import React from 'react';
import StyledHeader from './style';
import Avatar from '../avatar/';
import { connect } from 'react-redux';

const Header = props => (
  <StyledHeader.Wrapper>
    <StyledHeader.Avatar>
      <Avatar
        theme={'active'}
      />
    </StyledHeader.Avatar>
    <div>
      <StyledHeader.Title>
        {props.game_room_title}
      </StyledHeader.Title>
      <StyledHeader.Subtitle>
        {props.game_room_subtitle}
      </StyledHeader.Subtitle>
    </div>
  </StyledHeader.Wrapper>
);

const mapStateToProps = state => {
  return {
    game_room_title: state.game_room_title,
    game_room_subtitle: state.game_room_subtitle
  }
}

export default connect(mapStateToProps)(Header);