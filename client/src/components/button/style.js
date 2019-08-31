import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 100px;
	background-color: #FFF;
	width: 245px;
	height: 56px;
	outline: 0;
	border: 0;
	cursor: pointer;
	color: #4189BB;
	font-size: 16px;
	font-weight: 600;
	margin: 16px 0;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);
	&:hover {
		box-shadow:0 2px 4px 0 rgba(0,0,0,0.5);
	}
`;

export default StyledButton;