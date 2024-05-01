import { styled } from 'styled-components';

const Index = ({ children, align, justify, gap, direction, filter }) => {
    return (
        <FlexWrap
            align={align}
            justify={justify}
            gap={gap}
            direction={direction}
            filter={filter}
        >
            {children}
        </FlexWrap>
    );
}

const FlexWrap = styled.div`
    width: ${props => props?.width? props.width : "100%"};
    display: flex;
    align-items: ${props => props.align? props.align : "center"};
    justify-content : ${props => props.justify? props.justify : "center"};
    flex-direction: ${props => props.direction? props.direction : "row"};
    gap : ${props => props.gap? props.gap : "8px"};
    filter : drop-shadow(${props => props.dropshadow? props.dropshadow : "0"});
`;

export default Index;
