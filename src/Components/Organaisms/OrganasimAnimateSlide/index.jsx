import { AtomBgColor, AtomIcon, AtomText, AtomFlexWrap } from '@Components/Atoms';
import { MoleculeFlexWrap, MoleculePaddingWrap } from '@Components/Molecules';

const Index = ({
    bgcolor,
    moleculePadding,
    atomWidth,
    atomSlide
}) => {
    return (
        <AtomBgColor bgcolor={bgcolor}>
            <div style={{ width: "100%", animation: "slideRightToLeft 20s linear infinite" }}>
                <MoleculePaddingWrap padding={moleculePadding}>
                        <AtomFlexWrap width={atomWidth}>
                            {atomSlide.map((el, id)=> {
                                return (
                                    <MoleculeFlexWrap key={id}>
                                        <AtomIcon
                                            icon={el.atomIcon}
                                            height={el.atomHeight}
                                            style={el.atomStyle}
                                            />
                                        <AtomText
                                            textsize={el.atomTextsize}
                                            textcolor={el.atomTextcolor}
                                            textweight={el.atomTextweight}
                                            lineheight={el.atomLineheight}
                                            text={el.atomText}
                                        />
                                    </MoleculeFlexWrap>
                                );
                            })
                            }
                        </AtomFlexWrap>
                </MoleculePaddingWrap>
            </div>
        </AtomBgColor>
    );
}

export default Index;
