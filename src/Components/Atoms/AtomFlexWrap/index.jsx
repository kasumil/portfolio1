import { styled } from 'styled-components'

const Index = ({ children, width }) => {
    return (
        <FlexWrap width={width}>
            {children}
        </FlexWrap>
    );
}


const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props?.width? props.width : "inherit"}
`;

export default Index;
