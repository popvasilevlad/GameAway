import styled from 'styled-components';

const messageStyleMap = {
	left: {
		flexDirection: 'row',
		wrap: 'wrap'
	},
	right: {
		flexDirection: 'row-reverse',
		wrap: 'wrap-reverse'
	}
}

const Wrapper = styled.div`
	padding: 20px;
	height: 100%;
`;

const MessageGroup = styled.div`
	display: flex;
	margin: 0 0 30px 0;
	flex-direction: ${props => messageStyleMap[props.direction].flexDirection}
	text-align: ${props => props.direction}
`;

const Avatar = styled.div`
	flex-basis: 40px;
	padding-top: 5px;
`;

const ResponseMessagesContainer = styled.div`
	padding: 0 20px;
	flex-basis: calc(100% - 120px);
	display: flex;
	flex-direction: column;
	flex-wrap: ${props => messageStyleMap[props.direction].wrap};
`;


const StyledContainer = {
	Wrapper,
	MessageGroup,
	Avatar,
	ResponseMessagesContainer
};

export default StyledContainer;