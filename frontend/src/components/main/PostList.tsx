import styled from "../../styles/theme-components";
import { PostCard } from "../profile/card/PostCard";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { postsActionCreator } from "../../modules/action/posts";
import { postActionCreator } from "../../modules/action/post";
import { useLocation } from "react-router-dom";
import { routes } from "../../utils/routes";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-items: center;
    padding: 0 20px;
    margin: 16px 0;
`;

interface Props {}

export const PostList = ({}: Props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const target = useRef<HTMLDivElement>(null);

    const key = location.pathname === routes.home ? "allPosts" : "likePosts";
    const { loading, data, error } = useSelector(
        (state: any) => state.posts?.[key]
    );

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: data || [],
        threshold: 1,
        pageSize: 4,
    });

    useEffect(() => {
        if (location.pathname === routes.home) {
            dispatch(postsActionCreator.allPosts({ take: count * 4 + 4 }));
            dispatch(postsActionCreator.allPosts({ take: count * 4 + 4 }));
        } else if (location.pathname === routes.like) {
            dispatch(postsActionCreator.allPosts({ take: count * 4 + 4 }));
            dispatch(postsActionCreator.likePosts({ take: count * 4 + 4 }));
        }
    }, [count, location.pathname]);

    if (data?.length !== 0)
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
    else return <div>게시글이 없습니다</div>;
};
