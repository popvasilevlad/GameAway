import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 30px;
	background-color: #FFF;
	width: 275px;
	height: 60px;
	outline: 0;
	border: 0;
	cursor: pointer;
	color: #4189BB;
	font-size: 18px;
	font-weight: 600;
	box-shadow: 1px 2px 1px 1px rgba(0,0,0,0.2);
	&:hover {
		box-shadow: 1px 2px 2px 1px rgba(0,0,0,0.3);
	}
`;

export default StyledButton;