import { AtomRoundBg, AtomTitle, AtomText, AtomIcon, AtomImg } from "@Components/Atoms";
import { MoleculePaddingWrap, MoleculeRoundLink } from "@Components/Molecules";
import { styled } from "styled-components";

const Index = ({ sectionData }) => {
    return (
        <>
            <AtomRoundBg
                backgroundcolor={sectionData?.bgcolor}
                radius={sectionData?.radius}
                width={sectionData?.width}
            >
                <MoleculePaddingWrap
                    padding={sectionData?.padding? sectionData?.padding : "5em 6.25em"}
                    width={sectionData?.width}
                    gap={sectionData?.gap}
                    reverse={sectionData?.reverse}
                >
                    <LeftWrap>
                        <LeftWrap gap={sectionData?.content?.gap}>
                            <AtomTitle
                                letterspacing={"-0.96px"}
                                title={sectionData?.content?.title}
                                align={sectionData?.content?.align}
                            />
                            <AtomText
                                width={sectionData?.content?.txt?.width}
                                lineheight={sectionData?.content?.txt?.lineheight}
                                text={sectionData?.content?.txt?.text}
                                align={sectionData?.content?.txt?.align}
                            />
                        </LeftWrap>
                        <ButtonWrap>
                            <MoleculeRoundLink
                                width={sectionData?.content?.btn?.width}
                                backgroundcolor={sectionData?.content?.btn?.backgroundcolor}
                                border={sectionData?.content?.btn?.border}
                                RoundGap={sectionData?.content?.btn?.RoundGap}
                                RoundPadding={sectionData?.content?.btn?.RoundPadding}
                                rightItem={<AtomIcon
                                    icon={sectionData?.content?.btn?.icon}
                                    height={sectionData?.content?.btn?.height}
                                    style={sectionData?.content?.btn?.style}
                                />}
                                RoundIsTitle={sectionData?.content?.btn?.RoundIsTitle}
                                RoundTextFont={sectionData?.content?.btn?.RoundTextFont}
                                RoundText={sectionData?.content?.btn?.RoundText}
                                RoundTextColor={sectionData?.content?.btn?.RoundTextColor}
                                RoundTextSize={sectionData?.content?.btn?.RoundTextSize}
                                RoundTextLetterSpacing={sectionData?.content?.btn?.RoundTextLetterSpacing}
                            />
                        </ButtonWrap>
                    </LeftWrap>
                    <AtomImg
                        src={sectionData?.img?.src}
                        alt={"banner"}
                        width={sectionData?.img?.width}
                        height={sectionData?.img?.height}
                    />
                </MoleculePaddingWrap>
            </AtomRoundBg>
        </>
    );
}

const LeftWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap? props.gap : "32px"};
    width: 485px;
    white-space: line-wrap;
`;

const ButtonWrap = styled.div`
    width: 235px;
`;

export default Index;
