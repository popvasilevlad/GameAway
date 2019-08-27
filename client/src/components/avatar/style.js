import styled from 'styled-components';

const themeMap = {
	bgColor: {
		active: '#4189BB',
		default: '#A5A6A9'
	}
}

const StyledAvatar = styled.div`
	background-color: ${props => themeMap.bgColor[props.theme] || themeMap.bgColor.default};
	border-radius: 50%;
	height: 40px;
    width: 40px;
	display: flex;
    justify-content: center;
    position: relative;
    img {
    	position: absolute;
    	top: -5px;
    	width: 85%;
    }
`;


export default StyledAvatar;