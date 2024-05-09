import { AtomFlexWrap, AtomTitle, AtomText, AtomImg, AtomLink } from '@Components/Atoms';
import { MoleculePaddingWrap, MoleculeRoundLink, MoleculeFlexWrap } from '@Components/Molecules';

const Index = ({ newitem, title }) => {
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
                    {newitem?.map((item)=> {
                        return (
                            <AtomLink to={`products/${item.link}`} key={item.name}>
                                <MoleculeFlexWrap
                                    width={"100%"}
                                    justify={"space-between"}
                                    align={"start"}
                                    direction={"column"}
                                    gap={"32px"}
                                >
                                    <MoleculeFlexWrap
                                        width={"100%"}
                                        justify={"space-between"}
                                        align={"start"}
                                        direction={"column"}
                                        gap={"19px"}
                                    >
                                        <AtomImg
                                            src={item.item}
                                            alt={"상품정보"}
                                        />
                                        <MoleculeFlexWrap
                                            width={"100%"}
                                            justify={"space-between"}
                                            align={"start"}
                                            direction={"column"}
                                            gap={"4px"}
                                        >
                                            <MoleculeRoundLink
                                                RoundGap={"0"}
                                                RoundPadding={""}
                                                backgroundcolor={"transparent"}
                                                RoundIsTitle={false}
                                                RoundTextFont={false}
                                                RoundText={item.name}
                                                RoundTextColor={"var(--brown)"}
                                                RoundTextSize={22}
                                                RoundTextLetterSpacing={""}
                                            />
                                            <AtomText
                                                text={`$${new Intl.NumberFormat("un-US").format(item.price)}`}
                                                textcolor={"var(--orange)"}
                                                textsize={"16px"}
                                                textweight={400}
                                                lineheight={"24px"}
                                            />
                                        </MoleculeFlexWrap>

                                    </MoleculeFlexWrap>
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
