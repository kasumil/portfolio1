import React from 'react';
import { styled } from 'styled-components';

const Index = ({ src, alt, width, height }) => {
    return (
        <>
            <ImageBox src={src} alt={alt} width={width} height={height} />   
        </>
    );
}

const ImageBox = styled.image`
    width: ${props => props?.width? props?.width : "100%"};
    height: ${props => props?.height? props?.height : "100%"};
`;

export default Index;
