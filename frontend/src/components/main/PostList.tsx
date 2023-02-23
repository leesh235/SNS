import styled from "../../styles/theme-components";
//functions
import { ListType } from "../../types/lib/post";
import { useGetPosts } from "../../hooks/post/useGetPosts";
//components
import { PostCard } from "./PostCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Wrapper = styled.span`
    width: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-content: center;
    margin: 16px 0;
`;

export const PostList = ({ type = "allPosts" }: ListType) => {
    const { loading, target, data } = useGetPosts({ type });

    return (
        <Wrapper>
            {data?.length === 0 ? (
                <div>게시글이 없습니다</div>
            ) : (
                data?.map((val: any, idx: number) => (
                    <PostCard key={idx} postId={val} type={type} />
                ))
            )}
            <div ref={target}></div>
        </Wrapper>
    );
};
