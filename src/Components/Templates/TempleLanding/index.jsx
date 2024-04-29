import { OrganaismHeader } from '@Components/Organaisms';

const Index = () => {
    return (
        <>
            <OrganaismHeader
                FullWrap={"100%"}
                AtomicFlexWrapWidth={"204px"}
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
        </>
    );
}

export default Index;
