import styled from 'styled-components';

const themeMap = {
	bgColor: {
		active: '#4189BB',
		default: '#A5A6A9'
	}
}

const Wrapper = styled.div`
	background-color: ${props => themeMap.bgColor[props.theme] || themeMap.bgColor.default};
	border-radius: 50%;
	height: 100%;
	display: flex;
    justify-content: center;
    img {
    	width: 85%;
    }
`;

const StyledAvatar = {
	Wrapper
};


export default StyledAvatar;