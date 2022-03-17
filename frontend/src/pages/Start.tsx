import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";
import { Welcome } from "../components/view/Welcome";

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
  display: grid;
  grid-template-columns: 280px 2fr 1fr;
  justify-items: start;
`;

const Start = () => {
  return (
    <Wrapper>
      <SideMenu />
      <Welcome />
    </Wrapper>
  );
};

export default Start;
