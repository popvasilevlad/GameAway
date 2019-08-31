import styled from 'styled-components';

const buttonHoverStyling = () => `
	cursor: pointer;
	&:hover {
		box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.5);
	}
`;

const StyledActionBullet = styled.div`
    width: 56px;
    height: 56px;
	background-color: #50AADD;
	border-radius: 50%;
	color: #FFF;
	text-align: center;
	line-height: 60px;
    font-size: 18px;
    font-weight: 500;
	${props => props.onClick ? buttonHoverStyling() : ''}
`;

export default StyledActionBullet;