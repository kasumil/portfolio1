import { styled } from "styled-components";

const AtomText = ({ width, text, textsize, textcolor, textweight, lineheight }) => {
    return (
        <Ptag
            width={width}
            textsize={textsize}
            textcolor={textcolor}
            textweight={textweight}
            lineheight={lineheight}
        >
            {text}
        </Ptag>
    );
}

const Ptag = styled.p`
    width: ${props => props?.width || "100%"};
    font-family: var(--font-DMSans);
    font-size: ${props => props?.textsize|| 16}px;
    color: ${props => props?.textcolor|| "black" };
    font-weight: ${props=> props?.textweight || "400"};
    line-height: ${props => props?.lineheight || ""}
    margin: 0;
`;

export default AtomText;