import { MoleculePaddingWrap, MoleculeFlexWrap } from '@Components/Molecules';
import { OrganaismSection } from "@Components/Organaisms";

const Index = ({ list }) => {
    return (
        <div>
            <MoleculePaddingWrap padding={"80px 100px"}>
                <MoleculeFlexWrap
                    width={"100%"}
                    justify={"space-between"}
                    align={"center"}
                    direction={"column"}
                    gap={"40px"}
                >
                    {list.map(item=> {
                        return (
                            <OrganaismSection sectionData={item} key={item} />
                        )
                    })}
                </MoleculeFlexWrap>
            </MoleculePaddingWrap>

        </div>
    );
}

export default Index;
