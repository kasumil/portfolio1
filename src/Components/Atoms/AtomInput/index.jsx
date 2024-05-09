import { styled } from "styled-components";

const Index = ({ type="text", name="email", onChange, placeholder="Email" }) => {
    return (
        <InputWrap type={type} name={name} onChange={onChange} placeholder={placeholder} />
    );
}

const InputWrap = styled.input`
    border-radius: 32px;
    border: 1px solid #EDEDED;
    padding: 12px 24px;

    &::placeholder{
        color: #EDEDED;
    }
`;

export default Index;
