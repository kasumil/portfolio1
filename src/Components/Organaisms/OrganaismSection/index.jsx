import { AtomBgColor, AtomTitle, AtomText, AtomIcon, AtomImg } from "@Components/Atoms";
import { MoleculePaddingWrap, MoleculeRoundLink } from "@Components/Molecules";
import { styled } from "styled-components";

const Index = () => {
    return (
        <>
            <AtomBgColor
                bgcolor={"var(--orange-light)"}
            >
                <MoleculePaddingWrap padding={"5em 6.25em"}>
                    <LeftWrap>
                        <LeftWrap gap={"16px"}>
                            <AtomTitle
                                letterspacing={"-0.96px"}
                                title={'An innovative way to make furniture lighter'}
                            />
                            <AtomText
                                width={"424px"}
                                lineheight={"28px"}
                                text={"Discover hassle-free delivery, free assembly and the flexibility to rent, rent-to-own or buy."}
                            />
                        </LeftWrap>
                        <ButtonWrap>
                            <MoleculeRoundLink
                                RoundGap={"10px"}
                                RoundPadding={"16px 32px"}
                                rightItem={<AtomIcon
                                    icon={"iconamoon:arrow-right-2-duotone"}
                                    height={"15"}
                                    style={{ color : "white"}}
                                />}
                                RoundIsTitle={false}
                                RoundTextFont={false}
                                RoundText={"Start shopping"}
                                RoundTextColor={"var(--white)"}
                                RoundTextSize={20}
                                RoundTextLetterSpacing={"-1%"}
                            />
                        </ButtonWrap>
                    </LeftWrap>
                    <AtomImg
                        src={"/public/images/bannerhero.png"}
                        alt={"banner"}
                        width={"65em"}
                        height={"35em"}
                    />
                </MoleculePaddingWrap>
            </AtomBgColor>
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
