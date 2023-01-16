import styled from "../../styles/theme-components";
import { useRef } from "react";
//functions
import { useInfiniteScroll } from "../../hooks/common/useInfiniteScroll";
import { useGetList } from "../../hooks/common/useGetList";
//components
import { PostCard } from "../profile/card/PostCard";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-items: center;
    padding: 0 20px;
    margin: 16px 0;
`;

export const PostList = () => {
    const target = useRef<HTMLDivElement>(null);

    const { loading, data, error } = useGetList();

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: data || [],
        threshold: 1,
        pageSize: 4,
    });

    if (loading) return <div>loading...</div>;
    if (!data) return <div>게시글이 없습니다</div>;
    return (
        <Wrapper>
            {Object.keys(data)?.map((val: any, idx: number) => {
                return idx === data.length - 1 ? (
                    <PostCard key={idx} endView={target} postId={val} />
                ) : (
                    <PostCard key={idx} postId={val} />
                );
            })}
        </Wrapper>
    );
};
