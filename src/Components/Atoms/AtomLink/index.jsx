import React from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

const Index = ({ children, to, width, gap }) => {
    return (
        <LinkStyle to={to} $width={width} $gap={gap} >
            {children}
        </LinkStyle>
    );
}

const LinkStyle = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props?.$width? props?.$width : "inherit"};
    gap: ${props => props?.$gap? props?.$gap : "0"};
`;

export default Index;
