import styled from "../../styles/theme-components";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//functions
import { useInfiniteScroll } from "../../hooks/common/useInfiniteScroll";
import { useGetList } from "../../hooks/common/useGetList";
import { ListType } from "../../types/lib/post";
//components
import { PostCard } from "./PostCard";

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-content: center;
    margin: 16px 0;
`;

export const PostList = ({ type = "allPosts" }: ListType) => {
    const target = useRef<HTMLDivElement>(null);

    const { loading, data, error } = useGetList({ type });

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: data || [],
        threshold: 1,
        pageSize: 4,
    });

    useEffect(() => {}, []);

    if (!data) return <div>게시글이 없습니다</div>;
    return (
        <Wrapper>
            {Object.keys(data)?.map((val: any, idx: number) => {
                return idx === data.length - 1 ? (
                    <PostCard
                        key={idx}
                        endView={target}
                        postId={val}
                        type={type}
                    />
                ) : (
                    <PostCard key={idx} postId={val} type={type} />
                );
            })}
        </Wrapper>
    );
};
