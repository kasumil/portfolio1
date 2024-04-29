import React from 'react';
import { AtomicRound, AtomicTitle, AtomicText } from '@Components/Atomics';

const Index = ({ 
    RoundGap,
    RoundPadding,
    RoundIsTitle,
    RoundTextFont = false,
    RoundText,
    RoundTextColor,
    RoundTextSize,
    RoundTextWeight,
    leftItem, 
    rightItem
}) => {
    return (
        <>
            <AtomicRound gap={RoundGap} padding={RoundPadding}>
                {leftItem && leftItem}
                {RoundIsTitle
                ?
                    <AtomicTitle
                        title={RoundText}
                        textfont={RoundTextFont} // true or false
                        textsize={18}
                        textcolor={"var(--black03)"}
                        textweight={400}
                    />
                :
                    <AtomicText
                        text={RoundText}
                        textcolor={RoundTextColor}
                        textsize={RoundTextSize}
                        textweight={RoundTextWeight}
                    />
                }
                {rightItem && rightItem}
            </AtomicRound>  
        </>
    );
}

export default Index;
