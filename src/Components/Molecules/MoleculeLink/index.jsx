import { AtomLink, AtomText } from '@Components/Atoms';
import { AtomTitle } from '../../Atoms';

const Index = ({ leftItem, gap, width, isTitle, textFont = false, text, to, rightItem, textColor }) => {
    return (
        <>
            <AtomLink to={to} gap={gap} width={width}>
                {leftItem && leftItem}
                {isTitle
                ?
                    <AtomTitle
                        title={text}
                        textfont={textFont?.toString()} // true or false
                        textsize={18}
                        textcolor={"var(--black03)"}
                        textweight={400}
                    />
                :
                    <AtomText
                        text={text}
                    />
                }
                {rightItem && rightItem}
            </AtomLink>  
        </>
    );
}

export default Index;
