import React, { useState, useEffect } from 'react';
import StyledUserInfo from './style';
import UserEditIcon from './user-edit-icon.png';
import { changeName } from '../../actions';

const {
	Wrapper,
	Icon,
	Input
} = StyledUserInfo;

const UserInfo = props => {
	const initialName = props.name;

	const [ editMode, setEditMode] = useState(false);
	const [ userName, handleEdit] = useState(props.name);

	useEffect(() => {
		handleEdit(props.name)
	}, [props.name]);

	const handleInputUpdate = value => {
		handleEdit(value);
		setEditMode(false);
		if (value !== initialName) changeName(props.id, value);
	};

	const handleKeyPress = e => {
		if (e.keyCode === 13) return handleInputUpdate(e.target.value);

		handleEdit(e.value);
	}

	return (
		<Wrapper
			onClick={() => setEditMode(true)}
			editMode={editMode}
		>
			<Icon src={UserEditIcon} />
			{editMode ?
				<Input
					className={'player-name-input'}
					autoFocus
					defaultValue={userName}
					onKeyDown={handleKeyPress}
					onBlur={e => handleInputUpdate(e.target.value)}
				/>
			:
				userName
			}
			<br/>
		</Wrapper>
	);
}


export default UserInfo;