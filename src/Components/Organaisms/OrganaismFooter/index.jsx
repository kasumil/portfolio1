import { MoleculePaddingWrap, MoleculeFlexWrap, MoleculeRoundLink } from '@Components/Molecules';
import { AtomInput, AtomText, AtomIcon } from "@Components/Atoms";

const Index = () => {
    return (
        <div style={{ "borderTop" : "1px solid var(--gray-light)" }}>
            <MoleculePaddingWrap padding={"46px 100px"}>
                <MoleculeFlexWrap
                    width={"100%"}
                    justify={"start"}
                    align={"start"}
                    direction={"row"}
                    gap={"98px"}
                >
                    <MoleculeFlexWrap
                        width={"100%"}
                        justify={"space-between"}
                        align={"start"}
                        direction={"column"}
                        gap={"24px"}
                    >
                        <div style={{ gap: "4px" }}>
                            <AtomText
                                textweight={700}
                                textsize={"24px"}
                                lineheight={"24px"}
                                text={"Be in the know"}
                                align={"left"}
                            />
                            <AtomText
                                textsize={"24px"}
                                lineheight={"24px"}
                                text={"Get the latest products, promotions, and design tips in\nyour inbox.\nSign up and get 25% off your first month."}
                                align={"left"}
                            />
                        </div>
                        <MoleculeFlexWrap
                            width={"100%"}
                            justify={"space-between"}
                            align={"start"}
                            direction={"row"}
                            gap={"16px"}
                        >
                            <AtomInput />
                            <MoleculeRoundLink
                                border={"1px solid var(--orange)"}
                                RoundPadding={"12px 43px"}
                                backgroundcolor={"transparent"}
                                RoundIsTitle={false}
                                RoundTextFont={false}
                                RoundText={"Submit"}
                                RoundTextColor={"var(--orange)"}
                                RoundTextSize={16}
                                RoundTextLetterSpacing={""}
                            />
                        </MoleculeFlexWrap>
                    </MoleculeFlexWrap>

                    {/* Shop */}
                    <MoleculeFlexWrap
                        width={"100%"}
                        justify={"space-between"}
                        align={"start"}
                        direction={"column"}
                        gap={"15px"}
                    >
                        <AtomText
                            textweight={700}
                            textsize={"24px"}
                            lineheight={"24px"}
                            text={"Shop"}
                            align={"left"}
                        />
                        <AtomText
                            textsize={"14px"}
                            lineheight={"24px"}
                            text={"The Goods"}
                            align={"left"}
                        />
                        <AtomText
                            textsize={"14px"}
                            lineheight={"24px"}
                            text={"Feather for Business"}
                            align={"left"}
                        />
                        <AtomText
                            textsize={"14px"}
                            lineheight={"24px"}
                            text={"Get design help"}
                            align={"left"}
                        />
                    </MoleculeFlexWrap>

                    {/* Help */}
                    <MoleculeFlexWrap
                        width={"100%"}
                        justify={"space-between"}
                        align={"start"}
                        direction={"column"}
                        gap={"15px"}
                    >
                        <AtomText
                            textweight={700}
                            textsize={"24px"}
                            lineheight={"24px"}
                            text={"Help"}
                            align={"left"}
                        />
                        <AtomText
                            textsize={"14px"}
                            lineheight={"24px"}
                            text={"ridou99@gmail.com"}
                            align={"left"}
                        />
                        <AtomText
                            textsize={"14px"}
                            lineheight={"24px"}
                            text={"FAQs"}
                            align={"left"}
                        />
                    </MoleculeFlexWrap>

                    {/* follow us */}
                    <MoleculeFlexWrap
                        width={"100%"}
                        justify={"space-between"}
                        align={"start"}
                        direction={"column"}
                        gap={"15px"}
                    >
                        <AtomText
                            textweight={700}
                            textsize={"24px"}
                            lineheight={"24px"}
                            text={"Follow us"}
                            align={"left"}
                        />
                        <MoleculeFlexWrap
                            justify={"start"}
                            align={"start"}
                            direction={"row"}
                            gap={"20px"}
                        >
                            <AtomIcon
                                icon={"basil:instagram-outline"}
                                height={"18px"}
                            />
                            <AtomIcon
                                icon={"pajamas:twitter"}
                                height={"18px"}
                            />
                            <AtomIcon
                                icon={"mingcute:pinterest-fill"}
                                height={"18px"}
                            />
                            <AtomIcon
                                icon={"ic:outline-facebook"}
                                height={"18px"}
                            />
                            <AtomIcon
                                icon={"mdi:linkedin"}
                                height={"18px"}
                            />
                        </MoleculeFlexWrap>
                    </MoleculeFlexWrap>
                </MoleculeFlexWrap>
            </MoleculePaddingWrap>
        </div>
    );
}

export default Index;