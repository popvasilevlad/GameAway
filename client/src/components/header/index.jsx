import React from 'react';
import UserInfo from '../user-info';
import { StyledHeader } from './style';
import AvatarIcon from '../avatar/';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

const {
  Wrapper,
  Avatar,
  Title,
  TitleWrapper,
  Subtitle
} = StyledHeader;

const Header = props => {
  const { player_1, player_2 } = props;

  const userData = player_1.id === cookie.load('clientSessionId') ? player_1 : player_2;
  const opponentData = player_1.id !== cookie.load('clientSessionId') ? player_1 : player_2;

  return (
    <Wrapper>
      <Avatar>
        <AvatarIcon
          theme={'active'}
        />
      </Avatar>
      <TitleWrapper>
        <Title>
          {opponentData.name || 'Waiting...'}
        </Title>
        <Subtitle>
          {props.game_room_subtitle}
        </Subtitle>
      </TitleWrapper>
      <UserInfo
        name={userData.name}
        id={userData.id}
      />
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    game_room_title: state.game_room_title,
    game_room_subtitle: state.game_room_subtitle,
    player_1: state.player_1,
    player_2: state.player_2
  }
}

export default connect(mapStateToProps)(Header);