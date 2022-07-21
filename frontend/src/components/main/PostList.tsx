import styled from "../../styles/theme-components";
import { PostCard } from "../profile/card/PostCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-items: center;
    padding: 0 20px;
    margin-top: 16px;
`;

export const PostList = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state.posts.allPosts
    );

    useEffect(() => {
        console.log(data);
    }, [loading]);

    return (
        <Wrapper>
            {loading &&
                data?.map((val: any, idx: number) => {
                    return <PostCard key={idx} postId={val} />;
                })}
        </Wrapper>
    );
};
