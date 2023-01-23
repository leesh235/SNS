import styled from "../../../styles/theme-components";
import { useRef } from "react";
//functions
import { useInfiniteScroll } from "../../../hooks/common/useInfiniteScroll";
import { useGetList } from "../../../hooks/common/useGetList";
//components
import { GridCard } from "./GridCard";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: 20px;
    column-gap: 20px;

    margin: 16px 0;
`;

export const PostGridList = () => {
    const target = useRef<HTMLDivElement>(null);

    const { loading, data, error } = useGetList({ type: "myPosts" });

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: data || [],
        threshold: 1,
        pageSize: 4,
    });

    if (!data) return <div>게시글이 없습니다</div>;
    return (
        <Wrapper>
            {Object.keys(data)?.map((val: any, idx: number) => {
                // return idx === data.length - 1 ? (
                //     <PostCard key={idx} endView={target} postId={val} />
                // ) : (
                //     <PostCard key={idx} postId={val} />
                // );
                return <GridCard key={idx} postId={val} />;
            })}
        </Wrapper>
    );
};
