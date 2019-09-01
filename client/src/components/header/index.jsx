import React from 'react';
import StyledHeader from './style';
import AvatarIcon from '../avatar/';
import { connect } from 'react-redux';

const {
  Wrapper,
  Avatar,
  Title,
  Subtitle
} = StyledHeader;

const Header = props => (
  <Wrapper>
    <Avatar>
      <AvatarIcon
        theme={'active'}
      />
    </Avatar>
    <div>
      <Title>
        {props.game_room_title}
      </Title>
      <Subtitle>
        {props.game_room_subtitle}
      </Subtitle>
    </div>
  </Wrapper>
);

const mapStateToProps = state => {
  return {
    game_room_title: state.game_room_title,
    game_room_subtitle: state.game_room_subtitle
  }
}

export default connect(mapStateToProps)(Header);