import React from 'react';
import avatar from './avatar.png';
import StyledAvatar from './style.js';

const Avatar = props => (
    <StyledAvatar theme={props.theme}>
       <img src={avatar} />
    </StyledAvatar>
);

export default Avatar;