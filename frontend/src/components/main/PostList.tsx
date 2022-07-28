import styled from "../../styles/theme-components";
import { PostCard } from "../profile/card/PostCard";
import { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { setAllPosts } from "../../modules/action/posts";

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
        threshold: 0.8,
        pageSize: 4,
    });

    useEffect(() => {
        dispatch(setAllPosts({ take: 4, skip: count * 4 }));
    }, [count]);

    return (
        <Wrapper>
            {data?.map((val: any, idx: number) => {
                if (idx === data.length - 1)
                    return (
                        <div
                            key={idx}
                            ref={target}
                            style={{ width: "100%", height: "auto" }}
                        >
                            <PostCard key={idx} postId={val} />
                        </div>
                    );
                else
                    return (
                        <div
                            key={idx}
                            style={{ width: "100%", height: "auto" }}
                        >
                            <PostCard key={idx} postId={val} />
                        </div>
                    );
            })}
            {loading && <div>Loading...</div>}
        </Wrapper>
    );
};
