import { AtomTitle, AtomFlexWrap, AtomBgColor, AtomRoundBg } from '@Components/Atoms';
import { MoleculePaddingWrap, MoleculeFlexWrap } from '@Components/Molecules';
import Cabinet from '@Assets/Images/Svgs/Cabinet';
import DrawingMode from '@Assets/Images/Svgs/DrawingMode';
import Uploading from '@Assets/Images/Svgs/Uploading';
import { AtomText } from '../../Atoms';

const Index = () => {
    return (
        <MoleculePaddingWrap padding={"80px 100px"}>
            <MoleculeFlexWrap
                justify={"center"}
                direction={"column"}
                gap={"56px"}
            >
                <AtomFlexWrap width={"100%"} justify={"center"}>
                    <AtomTitle
                        title={"About our product"}
                        textsize={40}
                        textcolor={"var(--brown)"}
                        letterSpacing={"-0.96px"}
                    />
                </AtomFlexWrap>
                <MoleculeFlexWrap
                    gap={"32px"}
                >
                    <AtomRoundBg radius={"12px"} backgroundcolor={"var(--white)"} dropshadow={"12px 16px 50px var(--gray-deep)"}>
                        <MoleculePaddingWrap padding={"32px 9.5px"}>
                            <MoleculeFlexWrap
                                justify={"center"}
                                direction={"column"}
                                gap={"28px"}
                            >
                                <AtomRoundBg radius={"50%"} backgroundcolor={"var(--gray)"} padding={"16px"}>
                                    <Uploading />
                                </AtomRoundBg>
                                <AtomText
                                    width={"373px"}
                                    text={"We provide a high quality rental at an affordable price"}
                                    textsize={"22"}
                                    textcolor={"var(--brown)"}
                                    textweight={"400"}
                                    lineheight={"32px"}
                                    align={"center"}
                                />
                            </MoleculeFlexWrap>
                        </MoleculePaddingWrap>
                    </AtomRoundBg>
                    <AtomRoundBg radius={"12px"} backgroundcolor={"var(--white)"} dropshadow={"12px 16px 50px var(--gray-deep)"}>
                        <MoleculePaddingWrap padding={"32px 9.5px"}>
                            <MoleculeFlexWrap
                                justify={"center"}
                                direction={"column"}
                                gap={"28px"}
                            >
                                <AtomRoundBg radius={"50%"} backgroundcolor={"var(--gray)"} padding={"16px"}>
                                    <DrawingMode />
                                </AtomRoundBg>
                                <AtomText
                                    width={"373px"}
                                    text={"Feather has made furniture rentals cool again."}
                                    textsize={"22"}
                                    textcolor={"var(--brown)"}
                                    textweight={"400"}
                                    lineheight={"32px"}
                                    align={"center"}
                                />
                            </MoleculeFlexWrap>
                        </MoleculePaddingWrap>
                    </AtomRoundBg>
                    <AtomRoundBg radius={"12px"} backgroundcolor={"var(--white)"} dropshadow={"12px 16px 50px var(--gray-deep)"}>
                        <MoleculePaddingWrap padding={"32px 9.5px"}>
                            <MoleculeFlexWrap
                                justify={"center"}
                                direction={"column"}
                                gap={"28px"}
                            >
                                <AtomRoundBg radius={"50%"} backgroundcolor={"var(--gray)"} padding={"16px"}>
                                    <Cabinet />
                                </AtomRoundBg>
                                <AtomText
                                    width={"373px"}
                                    text={"Ease the pain of moving from apartment to apartment."}
                                    textsize={"22"}
                                    textcolor={"var(--brown)"}
                                    textweight={"400"}
                                    lineheight={"32px"}
                                    align={"center"}
                                />
                            </MoleculeFlexWrap>
                        </MoleculePaddingWrap>
                    </AtomRoundBg>
                </MoleculeFlexWrap>
            </MoleculeFlexWrap>
        </MoleculePaddingWrap>
    );
}

export default Index;
