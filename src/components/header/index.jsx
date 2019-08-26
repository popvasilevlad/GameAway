import React from 'react';
import StyledHeader from './style';
import Avatar from '../avatar/';

const Header = () => {
    return (
      <StyledHeader.Wrapper>
        <StyledHeader.Avatar>
          <Avatar
            theme={'active'}
          />
        </StyledHeader.Avatar>
        <div>
          <StyledHeader.Title>
            Scoober team
          </StyledHeader.Title>
          <StyledHeader.Subtitle>
            Win the game or win the job
          </StyledHeader.Subtitle>
        </div>
      </StyledHeader.Wrapper>
  );
};

export default Header;