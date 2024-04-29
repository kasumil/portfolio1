import React from 'react';
import { styled } from "styled-components";

const Index = ({ children, bgcolor }) => {
    return (
        <BgColor bgcolor={bgcolor}>
            {children}
        </BgColor>
    );
}

const BgColor = styled.div`
    background-color : ${props => props?.bgcolor? props?.bgcolor : "inherit"};
`;

export default Index;
