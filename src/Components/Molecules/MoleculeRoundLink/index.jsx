import { AtomRoundBg, AtomTitle, AtomText } from '@Components/Atoms';

const Index = ({ 
    RoundGap,
    RoundPadding,
    RoundIsTitle,
    RoundTextFont = false,
    RoundText,
    RoundTextColor,
    RoundTextSize,
    RoundTextWeight,
    RoundTextLetterSpacing,
    leftItem,
    backgroundcolor, 
    rightItem,
    width,
    border
}) => {
    return (
        <>
            <AtomRoundBg width={width} border={border} gap={RoundGap} padding={RoundPadding} backgroundcolor={backgroundcolor}>
                {leftItem && leftItem}
                {RoundIsTitle
                ?
                    <AtomTitle
                        title={RoundText}
                        textfont={RoundTextFont} // true or false
                        textsize={18}
                        textcolor={"var(--black03)"}
                        textweight={400}
                        lineheight={RoundTextLetterSpacing}
                        
                    />
                :
                    <AtomText
                        text={RoundText}
                        textcolor={RoundTextColor}
                        textsize={RoundTextSize}
                        textweight={RoundTextWeight}
                        lineheight={RoundTextLetterSpacing}
                    />
                }
                {rightItem && rightItem}
            </AtomRoundBg>  
        </>
    );
}

export default Index;
