import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";
import { PostList } from "../components/view/PostList";
import { ChattingList } from "../components/view/ChattingList";

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
  display: grid;
  grid-template-columns: minmax(auto, 360px) auto minmax(auto, 360px);
  > :nth-child(2) {
    justify-items: center;
  }
  > :nth-child(1):nth-child(3) {
    justify-items: start;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <SideMenu />
      <PostList />
      <ChattingList />
    </Wrapper>
  );
};

export default Main;
