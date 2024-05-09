import { styled } from 'styled-components'

const Index = ({ children, width, justify }) => {
    return (
        <FlexWrap $width={width} $justify={justify} >
            {children}
        </FlexWrap>
    );
}


const FlexWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props?.$justify? props.$justify : "space-between"};
    width: ${props => props?.$width? props.$width : "inherit"}
`;

export default Index;
