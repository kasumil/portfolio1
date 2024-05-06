import { styled } from "styled-components"; 

const Index = ({ children, padding, border, reverse, width, gap }) => {
    return (
        <MoleculeHeaderWrap padding={padding} border={border} reverse={reverse} width={width} gap={gap}>
            {children}
        </MoleculeHeaderWrap>
    );
}

const MoleculeHeaderWrap = styled.div`
    width : ${props => props.width? props.width : ""};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${props => props.gap? props?.gap : ""};
    padding: ${props => props.padding? props?.padding : "16px 100px"};
    border-bottom: ${props => props.border? "1px solid var(--black05)": ''};
    flex-direction: ${props => props.reverse? "row-reverse": "row"};
`;

export default Index;
