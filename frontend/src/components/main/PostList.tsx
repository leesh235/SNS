import styled from "../../styles/theme-components";
import { PostCard } from "../profile/card/PostCard";
import { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { setAllPosts } from "../../modules/action/posts";
import { setPostDetails } from "../../modules/action/post";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-items: center;
    padding: 0 20px;
    margin: 16px 0;
`;

interface Props {
    getPostsFunc?: any;
}

export const PostList = ({ getPostsFunc }: Props) => {
    const dispatch = useDispatch();
    const target = useRef<HTMLDivElement>(null);

    const { loading, data, error } = useSelector(
        (state: any) => state.posts.allPosts
    );

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: data || [],
        threshold: 1,
        pageSize: 4,
    });

    useEffect(() => {
        dispatch(setPostDetails({ take: 4, skip: count * 4 }));
        dispatch(setAllPosts({ take: 4, skip: count * 4 }));
    }, [count]);

    return (
        <Wrapper>
            {data?.map((val: any, idx: number) => {
                return idx === data.length - 1 ? (
                    <PostCard key={idx} endView={target} postId={val} />
                ) : (
                    <PostCard key={idx} postId={val} />
                );
            })}
            {loading && <div>Loading...</div>}
        </Wrapper>
    );
};
