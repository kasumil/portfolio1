import { AtomFlexWrap, AtomTitle, AtomIcon, AtomImg, AtomLink } from '@Components/Atoms';
import { MoleculePaddingWrap, MoleculeRoundLink, MoleculeFlexWrap } from '@Components/Molecules';

const Index = ({ rooms, title }) => {
    return (
        <MoleculePaddingWrap padding={"80px 100px"}>
            <MoleculeFlexWrap
                width={"100%"}
                justify={"space-between"}
                align={"start"}
                direction={"column"}
                gap={"48px"}
            >
                <AtomFlexWrap width={"100%"} justify={"start"}>
                    <AtomTitle
                        title={title}
                        textsize={40}
                        textcolor={"var(--brown)"}
                        letterSpacing={"-0.96px"}
                        />
                </AtomFlexWrap>
                <MoleculeFlexWrap
                    width={"100%"}
                    justify={"space-between"}
                    align={"center"}
                    gap={"32px"}
                >
                    {rooms?.map((item)=> {
                        return (
                            <AtomLink to={`categories/${item.link}`} key={item.name}>
                                <MoleculeFlexWrap
                                    width={"100%"}
                                    justify={"space-between"}
                                    align={"start"}
                                    direction={"column"}
                                    gap={"16px"}
                                >
                                    <AtomImg
                                        src={item.room}
                                        alt={"룸 이미지"}
                                    />
                                    <MoleculeRoundLink
                                        RoundGap={"0"}
                                        RoundPadding={""}
                                        rightItem={<AtomIcon
                                            icon={"iconamoon:arrow-right-2-duotone"}
                                            height={"24px"}
                                            style={{ color : "var(--black01)"}}
                                        />}
                                        backgroundcolor={"transparents"}
                                        RoundIsTitle={false}
                                        RoundTextFont={false}
                                        RoundText={item.name}
                                        RoundTextColor={"var(--brown)"}
                                        RoundTextSize={22}
                                        RoundTextLetterSpacing={"0%"}
                                    />
                                </MoleculeFlexWrap>
                            </AtomLink>
                        )
                    })}
                </MoleculeFlexWrap>
            </MoleculeFlexWrap>
        </MoleculePaddingWrap>
    );
}

export default Index;
