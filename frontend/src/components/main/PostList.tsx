import styled from "../../styles/theme-components";
//functions
import { ListType } from "../../types/lib/post";
import { useGetPosts } from "../../hooks/post/useGetPosts";
//components
import { PostCard } from "./PostCard";

const Wrapper = styled.span`
    width: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-content: center;
    margin: 16px 0;
`;

export const PostList = ({ type = "allPosts" }: ListType) => {
    const { target, data } = useGetPosts({ type });

    if (Object.keys(data).length === 0)
        return <div ref={target}>게시글이 없습니다</div>;
    return (
        <Wrapper>
            {Object.keys(data)?.map((val: any, idx: number) => (
                <PostCard key={idx} postId={val} type={type} />
            ))}
            <div ref={target}></div>
        </Wrapper>
    );
};
