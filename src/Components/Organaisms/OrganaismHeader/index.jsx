import { AtomFlexWrap, AtomRoundBg, AtomIcon } from '@Components/Atoms';
import { MoleculeLink, MoleculeRoundLink, MoleculePaddingWrap } from '@Components/Molecules';
import TitleLogo from '@Assets/Images/Svgs/TitleLogo';

const Index = ({
    FullWrap,
    AtomFlexWrapWidth,
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
            <MoleculePaddingWrap border={"border"}>
                <AtomFlexWrap width={FullWrap}>
                    <AtomFlexWrap width={AtomFlexWrapWidth}>
                        {AtomicLinkJson?.map((el)=> {
                            return (
                                <MoleculeLink key={el.text} text={el?.text} to={el?.to} />
                            );
                        })}
                    </AtomFlexWrap>
                    <div>
                        <MoleculeLink
                            leftItem={
                                <AtomRoundBg
                                    radius={LinkRadius}
                                    backgroundcolor={LinkBgColor}
                                    padding={LinkPadding}
                                >
                                    <TitleLogo />
                                </AtomRoundBg>
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
                            leftItem={<AtomIcon
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
                </AtomFlexWrap>
            </MoleculePaddingWrap>
        </>
    );
}

export default Index;
