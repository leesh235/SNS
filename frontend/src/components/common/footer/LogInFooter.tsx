import styled from "../../../styles/theme-components";

const Wrapper = styled.footer`
    width: 100vw;
    height: 170px;
    background-color: ${(props) => props.theme.color.white};
`;

export const LogInFooter = () => {
    return <Wrapper>footer</Wrapper>;
};
