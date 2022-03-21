import styled from "../../styles/theme-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
`;

export const WritePost = () => {
  return <Wrapper>WritePost</Wrapper>;
};
