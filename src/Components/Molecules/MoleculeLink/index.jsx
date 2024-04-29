import React from 'react';
import { AtomicLink, AtomicText } from '@Components/Atomics';
import { AtomicTitle } from '../../Atomics';

const Index = ({ leftItem, gap, width, isTitle, textFont = false, text, to, rightItem, textColor }) => {
    return (
        <>
            <AtomicLink to={to} gap={gap} width={width}>
                {leftItem && leftItem}
                {isTitle
                ?
                    <AtomicTitle
                        title={text}
                        textfont={textFont?.toString()} // true or false
                        textsize={18}
                        textcolor={"var(--black03)"}
                        textweight={400}
                    />
                :
                    <AtomicText
                        text={text}
                    />
                }
                {rightItem && rightItem}
            </AtomicLink>  
        </>
    );
}

export default Index;
