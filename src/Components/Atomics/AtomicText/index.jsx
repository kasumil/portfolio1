import React from 'react';
import { styled } from "styled-components";

const AtomicText = ({ text, textsize, textcolor, textweight }) => {
    return (
        <Ptag textsize={textsize} textcolor={textcolor} textweight={textweight}>
            {text}
        </Ptag>
    );
}

const Ptag = styled.p`
    font-family: var(--font-DMSans);
    font-size: ${props => props?.textsize|| 16}px;
    color: ${props => props?.textcolor|| "black" };
    font-weight: ${props=> props?.textweight || "400"};
    margin: 0;
`;

export default AtomicText;