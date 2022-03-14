import styled from "../../styles/theme-components";

const Wrapper = styled.div`
    font-size: 38px;
    font-weight: 900;
    color: ${(props) => props.theme.color.seaBule};
`;

export const Logo = () => {
    return <Wrapper>facebook</Wrapper>;
};
