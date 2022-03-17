import styled from "../../styles/theme-components";
import { PostCard } from "../card/PostCard";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin-top: 16px;
`;

export const PostList = () => {
  return (
    <Wrapper>
      <PostCard />
    </Wrapper>
  );
};
