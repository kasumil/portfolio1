import { styled } from "styled-components"; 

const Index = ({ children, padding, border }) => {
    return (
        <MoleculeHeaderWrap padding={padding} border={border}>
            {children}
        </MoleculeHeaderWrap>
    );
}

const MoleculeHeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.padding? props?.padding : "16px 100px"};
    border-bottom: ${props => props.border? "1px solid var(--black05)": ''};
`;

export default Index;
