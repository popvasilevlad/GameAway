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
	height: 36px;
    width: 36px;
	display: flex;
    justify-content: center;
    position: relative;
    img {
    	position: absolute;
    	top: -5px;
    	width: 30px;
    	height: 40px;
    }
`;


export default StyledAvatar;