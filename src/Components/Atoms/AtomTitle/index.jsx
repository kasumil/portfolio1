import { styled } from 'styled-components';

const AtomTitle = ({ textfont, title, textsize, textcolor, textweight, letterspacing, align }) => {
    return (
        <TitleTag
            $textfont={textfont}
            $textsize={textsize}
            $textcolor={textcolor}
            $textweight={textweight}
            $letterSpacing={letterspacing}
            $align={align}
        >
            {title}
        </TitleTag>
    );
}

const TitleTag = styled.div`
    font-family: ${props => props?.$textfont? "var(--font-Ramabhadra)" : "var(--font-Circular-std)"};
    font-size: ${props => props?.$textsize|| 48 }px;
    color: ${props => props?.$textcolor|| "black"};
    font-weight: ${props=> props?.$textweight || "700"};
    letter-spacing: ${props=> props?.$letterSpacing || ""};
    text-align: ${props=> props?.$align || "center"};
    white-space: break-spaces;
`;



export default AtomTitle;
