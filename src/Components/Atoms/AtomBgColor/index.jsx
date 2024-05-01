import React from 'react';
import { styled } from "styled-components";

const Index = ({ children, bgcolor, dropshadow }) => {
    return (
        <BgColor bgcolor={bgcolor} dropshadow={dropshadow}>
            {children}
        </BgColor>
    );
}

const BgColor = styled.div`
    background-color : ${props => props?.bgcolor? props?.bgcolor : "inherit"};
    filter : drop-shadow(${props => props.dropshadow? props.dropshadow : "0"});
`;

export default Index;
