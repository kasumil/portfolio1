import React from 'react';
import { styled } from "styled-components";

const Index = ({ children, gap, radius, backgroundcolor, padding }) => {
    return (
        <RoundedBg gap={gap} radius={radius} backgroundcolor={backgroundcolor} padding={padding}>
            {children}
        </RoundedBg>
    );
}

const RoundedBg = styled.div`
    border-radius: ${props => props.radius? props.radius : "32px"};
    background-color: ${props => props.backgroundcolor? props.backgroundcolor : "var(--orange)"};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.padding? props.padding : "0"};
    gap: ${props => props.gap? props.gap : "0"};
`;

export default Index;
