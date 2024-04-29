import React from 'react';

const TitleLogo = ({width="20", height="20"}) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7942 5.5L10 19L2.20577 5.5L17.7942 5.5Z" stroke="white"/>
                <path d="M3 6L10 10.5L17.5 6" stroke="white" strokeLinecap="round"/>
                <path d="M10 10.5V18.5" stroke="white" strokeLinecap="round"/>
            </svg>
        </>
    );
}

export default TitleLogo;
