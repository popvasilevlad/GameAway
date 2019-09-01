import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 12px;
    text-align: right;
    cursor: pointer;
    ${props => !props.editMode ?
        `&:hover {
            opacity: 0.5;
        }`: null }
`;

const Icon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 5px;
    filter: invert(1) brightness(100);
    vertical-align: text-bottom;
`;

const Input = styled.input`
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #FFF;
    color: #FFF;
    width: 100px;
    outline: 0;
    padding-bottom: 3px;
`;

const StyledUserInfo = {
    Wrapper,
    Icon,
    Input
};

export default StyledUserInfo;