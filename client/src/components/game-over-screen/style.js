import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(80,170,221, 0.8);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

const Wrapper = styled.div`
	color: #FFF;
	font-size: 48px;
	font-weight: 500;
`;

const WinImage = styled.img`
	width: 180px;
`;

const LoseImage = styled.img`
	width: 250px;
`;


const Styled = {
	Container,
	Wrapper,
	WinImage,
	LoseImage
}

export default Styled;