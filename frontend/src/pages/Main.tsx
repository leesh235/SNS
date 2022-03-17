import styled from "../styles/theme-components";
import { SideMenu } from "../components/side/SideMenu";
import { PostList } from "../components/view/PostList";
import { ChattingList } from "../components/view/ChattingList";

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
  display: grid;
  grid-template-columns: 280px auto 280px;
  justify-items: start;
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
