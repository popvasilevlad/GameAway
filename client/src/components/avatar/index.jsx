import React from 'react';
import PlayerAvatar from './avatar.png';
import DefaultAvatar from './default-avatar.png';
import StyledAvatar from './style.js';

const avatarsMap = {
	default: DefaultAvatar,
	active: PlayerAvatar
};

const Avatar = props => (
    <StyledAvatar theme={props.theme}>
       <img
            src={avatarsMap[props.theme]}
            alt={'user-avatar'}
        />
    </StyledAvatar>
);

export default Avatar;