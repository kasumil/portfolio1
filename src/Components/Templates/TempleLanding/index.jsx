import { OrganaismHeader, OrganaismSection, OrganasimAnimateSlide, OrganismProudcts, OrganismByRoom, OrganaismTitleLink } from '@Components/Organaisms';
import room1 from '/Images/room1.png';
import room2 from '/Images/room2.png';
import room3 from '/Images/room3.png';
import room4 from '/Images/room4.png';
import box1 from '/Images/box1.png';
import box2 from '/Images/box2.png';
import box3 from '/Images/box3.png';



const Index = () => {
    const rooms = [
        { room: room1, name: "Office", link: "office" },
        { room: room2, name: "Bedroom", link: "bedroom" },
        { room: room3, name: "Living Room", link: "living" },
        { room: room4, name: "Dining room", link: "dining" },
    ];

    const HeroBanner = {
        bgcolor: "var(--orange-light)",
        radius: "0px",
        content: {
            gap : "16px",
            title: 'An innovative way to make furniture lighter',
            txt: {
                width : "424px",
                lineheight : "28px",
                text : "Discover hassle-free delivery, free assembly and the flexibility to rent, rent-to-own or buy.",
            },
            btn : {
                RoundGap : "10px",
                RoundPadding : "16px 32px",
                icon : "iconamoon:arrow-right-2-duotone",
                height : "15",
                style : { color : "white"},
                RoundIsTitle : false,
                RoundTextFont : false,
                RoundText : "Start shopping",
                RoundTextColor : "var(--white)",
                RoundTextSize : 20,
                RoundTextLetterSpacing : "-1%",
            }
        },
        img : {
            src : "/public/images/bannerhero.png",
            width : "65em",
            height : "35em"
        }
    }

    const freeList = [
        {
            radius: "16px",
            padding: "24px 24px 24px 64px",
            bgcolor: "var(--blue-light)",
            width: "100%",
            gap: "147px",
            content: {
                gap : "16px",
                title: 'Hassle free',
                align: "left",
                txt: {
                    width : "424px",
                    lineheight : "28px",
                    text : "High quality but affordable rental\ndesigns.",
                    align: "left"
                },
                btn : {
                    RoundGap : "10px",
                    RoundPadding : "16px 32px",
                    icon : "iconamoon:arrow-right-2-duotone",
                    height : "15",
                    style : { color : "white"},
                    RoundIsTitle : false,
                    RoundTextFont : false,
                    RoundText : "Learn more",
                    RoundTextColor : "var(--white)",
                    RoundTextSize : 20,
                    RoundTextLetterSpacing : "-1%",
                }
            },
            img : {
                src : box1,
                width : "100%",
                height : "24.25em"
            }
        },
        {
            radius: "16px",
            padding: "24px 24px 24px 64px",
            bgcolor: "var(--orange-light)",
            width: "100%",
            reverse: true,
            gap: "147px",
            content: {
                gap : "16px",
                title: 'Risk free',
                align: "left",
                txt: {
                    width : "424px",
                    lineheight : "28px",
                    text : "Furniture three ways. Rent, rent-to-\nown, or buy. Your furniture is as\nflexible as you need it to be.",
                    align: "left"
                },
                btn : {
                    RoundGap : "10px",
                    RoundPadding : "16px 32px",
                    icon : "iconamoon:arrow-right-2-duotone",
                    height : "15",
                    style : { color : "white"},
                    RoundIsTitle : false,
                    RoundTextFont : false,
                    RoundText : "Learn more",
                    RoundTextColor : "var(--white)",
                    RoundTextSize : 20,
                    RoundTextLetterSpacing : "-1%",
                }
            },
            img : {
                src : box2,
                width : "100%",
                height : "24.25em"
            }
        },
        {
            radius: "16px",
            padding: "24px 24px 24px 64px",
            bgcolor: "var(--blue-light)",
            width: "100%",
            gap: "147px",
            content: {
                gap : "16px",
                title: 'Waste free',
                align: "left",
                txt: {
                    width : "424px",
                    lineheight : "28px",
                    text : "Last year we saved 522 tons of furniture from landfills. With your help, we can do even more.",
                    align: "left"
                },
                btn : {
                    RoundGap : "10px",
                    RoundPadding : "16px 32px",
                    icon : "iconamoon:arrow-right-2-duotone",
                    height : "15",
                    style : { color : "white"},
                    RoundIsTitle : false,
                    RoundTextFont : false,
                    RoundText : "Learn more",
                    RoundTextColor : "var(--white)",
                    RoundTextSize : 20,
                    RoundTextLetterSpacing : "-1%",
                }
            },
            img : {
                src : box3,
                width : "100%",
                height : "24.25em"
            }
        },
    ]

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
            <OrganaismSection sectionData={HeroBanner} />
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
            <OrganismByRoom rooms={rooms} title={"Browse by room"} />
            <OrganaismTitleLink list={freeList} />
        </>
    );
}

export default Index;
