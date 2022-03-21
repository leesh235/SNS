import styled from "../../styles/theme-components";

const Wrapper = styled.section`
  width: 908px;
  height: 100vh;
  margin-top: 56px;
  display: grid;
  grid-template-columns: 360px 500px;
  grid-template-rows: repeat(auto-fill, 1fr);
  column-gap: 16px;
  padding: 0 16px;
  margin-top: 16px;
`;

export const ProfileInfo = () => {
  return <Wrapper>ProfileInfo</Wrapper>;
};
