import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #50AADD;
    color: #FFF;
    padding: 15px 20px;
    display: flex;
    box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.5);
`;

const Avatar = styled.div`
    padding: 10px 20px 0 0;
`;

const Title = styled.div`
    font-size: 22px;
`;

const Subtitle = styled.div`
    font-size: 14px;
    line-height: 25px;
`;

const StyledHeader = {
    Wrapper,
    Avatar,
    Title,
    Subtitle
}

export default StyledHeader;