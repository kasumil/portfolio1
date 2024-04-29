import React from 'react';
import { styled } from "styled-components"; 

const Index = ({ children, padding }) => {
    return (
        <MoleculeHeaderWrap padding={padding}>
            {children}
        </MoleculeHeaderWrap>
    );
}

const MoleculeHeaderWrap = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => props.padding? props?.padding : "16px 100px"};
    border-bottom: 1px solid var(--black05);
`;

export default Index;
