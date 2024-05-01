import { OrganaismHeader, OrganaismSection, OrganasimAnimateSlide, OrganismProudcts } from '@Components/Organaisms';

const Index = () => {
    return (
        <>
            <OrganaismHeader
                FullWrap={"100%"}
                AtomFlexWrapWidth={"204px"}
                AtomicLinkJson={[
                    { text: "Cards", to: "/Cards" },
                    { text: "About", to: "/About" },
                    { text: "App", to: "/App" },
                ]}
                LinkRadius={"50%"}
                LinkBgColor={"var(--black01)"}
                LinkPadding={'4px'}
                LinkText="Halal_Lab"
                LinkTo={"/"}
                LinkGap={"8px"}
                LinkIsTitle={true}
                LinkTextFont={true}
                LinkWidth={"121px"}
                RoundGap={"10px"}
                RoundPadding={"8px 20px"}
                RoundIcon={"ri:search-line"}
                RoundHeight={"20px"}
                RoundStyle={{color: "white"}}
                RoundIsTitle={false}
                RoundTextFont={false}
                RoundText={"Check delivery area"}
                RoundTextColor={"var(--white)"}
                RoundTextSize={16}
                RoundTextWeight={"bold"}
            />
            <OrganaismSection />
            <OrganasimAnimateSlide
                bgcolor={"var(--green-light)"}
                moleculePadding={"25px 0"}
                atomWidth={"100%"}
                atomSlide={[
                    {
                        atomIcon: "ph:check-circle-light",
                        atomHeight: "20px",
                        atomStyle: { color: "var(--black01)"},
                        atomTextsize: "18",
                        atomTextcolor: "var(--black01)",
                        atomTextweight: 400,
                        atomLineheight: "24px",
                        atomText: "Fast, free delivery & assembly",
                    },
                    {
                        atomIcon: "ph:check-circle-light",
                        atomHeight: "20px",
                        atomStyle: { color: "var(--black01)"},
                        atomTextsize: "18",
                        atomTextcolor: "var(--black01)",
                        atomTextweight: 400,
                        atomLineheight: "24px",
                        atomText: "Convenient rent or buy options",
                    },
                    {
                        atomIcon: "ph:check-circle-light",
                        atomHeight: "20px",
                        atomStyle: { color: "var(--black01)"},
                        atomTextsize: "18",
                        atomTextcolor: "var(--black01)",
                        atomTextweight: 400,
                        atomLineheight: "24px",
                        atomText: "Low upfront costs for all rentals",
                    },
                    {
                        atomIcon: "ph:check-circle-light",
                        atomHeight: "20px",
                        atomStyle: { color: "var(--black01)"},
                        atomTextsize: "18",
                        atomTextcolor: "var(--black01)",
                        atomTextweight: 400,
                        atomLineheight: "24px",
                        atomText: "Flexibility to buy out rental items later",
                    },
                ]}
            />
            <OrganismProudcts />
        </>
    );
}

export default Index;
