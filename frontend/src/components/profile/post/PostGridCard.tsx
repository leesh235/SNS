import styled from "../../../styles/theme-components";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyPosts } from "../../../modules/action/posts";
import { setPostDetails } from "../../../modules/action/post";
import { GridCard } from "../card/GridCard";

const Wrapper = styled.div`
    margin-top: 15px;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

interface Props {}

export const PostGridCard = ({}: Props) => {
    const dispatch = useDispatch();
    const target = useRef<HTMLDivElement>(null);

    const user = useSelector((state: any) => state?.user?.profile?.data);
    const { loading, data, error } = useSelector(
        (state: any) => state?.posts?.myPosts
    );

    const { count } = useInfiniteScroll({
        target: target,
        targetArray: data || [],
        threshold: 1,
        pageSize: 8,
    });

    useEffect(() => {
        dispatch(setPostDetails({ type: "my", take: count * 8 + 8 }));
        dispatch(setMyPosts({ email: user?.email, take: count * 8 + 8 }));
    }, [count]);

    return (
        <Wrapper>
            {data?.map((val: any, idx: number) => {
                return idx === data.length - 1 ? (
                    <GridCard key={idx} endView={target} postId={val} />
                ) : (
                    <GridCard key={idx} postId={val} />
                );
            })}
        </Wrapper>
    );
};
