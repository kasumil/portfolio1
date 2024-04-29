import { AtomicFlexWrap, AtomicRound, AtomicIcon } from '@Components/Atomics';
import { MoleculeLink, MoleculeRoundLink, MoleculeHeaderWrap } from '@Components/Molecules';
import TitleLogo from '@Assets/Images/Svgs/TitleLogo';

const Index = ({
    FullWrap,
    AtomicFlexWrapWidth,
    AtomicLinkJson,
    LinkRadius,
    LinkBgColor,
    LinkPadding,
    LinkText,
    LinkTo,
    LinkGap,
    LinkIsTitle,
    LinkTextFont,
    LinkWidth,
    RoundGap,
    RoundPadding,
    RoundIcon,
    RoundHeight,
    RoundStyle,
    RoundIsTitle,
    RoundTextFont,
    RoundText,
    RoundTextColor,
    RoundTextSize,
    RoundTextWeight,
}) => {
    return (
        <>
            <MoleculeHeaderWrap>
                <AtomicFlexWrap width={FullWrap}>
                    <AtomicFlexWrap width={AtomicFlexWrapWidth}>
                        {AtomicLinkJson?.map((el)=> {
                            return (
                                <MoleculeLink key={el.text} text={el?.text} to={el?.to} />
                            );
                        })}
                    </AtomicFlexWrap>
                    <div>
                        <MoleculeLink
                            leftItem={
                                <AtomicRound
                                    radius={LinkRadius}
                                    backgroundcolor={LinkBgColor}
                                    padding={LinkPadding}
                                >
                                    <TitleLogo />
                                </AtomicRound>
                            } 
                            text={LinkText}
                            to={LinkTo}
                            gap={LinkGap}
                            isTitle={LinkIsTitle}
                            textFont={LinkTextFont}
                            width={LinkWidth}
                        />
                    </div>
                    <div>
                        <MoleculeRoundLink
                            RoundGap={RoundGap}
                            RoundPadding={RoundPadding}
                            leftItem={<AtomicIcon
                                icon={RoundIcon}
                                height={RoundHeight}
                                style={RoundStyle}
                            />}
                            RoundIsTitle={RoundIsTitle}
                            RoundTextFont={RoundTextFont}
                            RoundText={RoundText}
                            RoundTextColor={RoundTextColor}
                            RoundTextSize={RoundTextSize}
                            RoundTextWeight={RoundTextWeight}
                        />
                    </div>
                </AtomicFlexWrap>
            </MoleculeHeaderWrap>
        </>
    );
}

export default Index;
