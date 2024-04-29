import React from 'react';
import { styled } from 'styled-components';

const AtomicTitle = ({ textfont, title, textsize, textcolor, textweight }) => {
    return (
        <TitleTag textfont={textfont} textsize={textsize} textcolor={textcolor} textweight={textweight}>
            {title}
        </TitleTag>
    );
}

const TitleTag = styled.div`
    font-family: ${props => props?.textfont? "var(--font-Ramabhadra)" : "var(--font-Circular-std)"};
    font-size: ${props => props?.textsize|| 48 }px;
    color: ${props => props?.textcolor|| "black" };
    font-weight: ${props=> props?.textweight || "700"};
`;



export default AtomicTitle;
