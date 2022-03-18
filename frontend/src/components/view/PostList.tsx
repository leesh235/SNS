import styled from "../../styles/theme-components";
import { PostCard } from "../card/PostCard";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, auto);
  row-gap: 20px;
  align-items: center;
  padding: 0 20px;
  margin-top: 16px;
`;

const postList = [
  "1",
  "2",
  "3",
  "4",
  "2",
  "3",
  "4",
  "2",
  "3",
  "4",
  "2",
  "3",
  "4",
];

export const PostList = () => {
  return (
    <Wrapper>
      {postList.map((val, idx) => {
        return <PostCard key={idx} />;
      })}
    </Wrapper>
  );
};
