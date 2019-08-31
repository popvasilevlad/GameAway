import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #50AADD;
    color: #FFF;
    padding: 16px 18px;
    display: flex;
    box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
    z-index: 1;
    height: 74px;
    font-family: Roboto;
    letter-spacing: 0;
    box-sizing: border-box;
`;

const Avatar = styled.div`
    padding: 0 20px 0 0;
`;

const Title = styled.div`
    font-size: 22px;
    line-height: 20px;
`;

const Subtitle = styled.div`
    font-size: 12px;
    line-height: 30px;
`;

const StyledHeader = {
    Wrapper,
    Avatar,
    Title,
    Subtitle
}

export default StyledHeader;