import React from 'react';
import avatar from './avatar.png';
import StyledAvatar from './style.js';

const Avatar = props => (
    <StyledAvatar.Wrapper theme={props.theme}>
       <img src={avatar} />
    </StyledAvatar.Wrapper>
);

export default Avatar;