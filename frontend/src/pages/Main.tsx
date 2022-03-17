import styled from "../styles/theme-components";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
`;

const Main = () => {
    return <Wrapper>Main</Wrapper>;
};

export default Main;
