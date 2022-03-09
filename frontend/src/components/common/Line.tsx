import styled from "../../styles/theme-components";

const Wrapper = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;

export const Line = () => {
    return <Wrapper></Wrapper>;
};
