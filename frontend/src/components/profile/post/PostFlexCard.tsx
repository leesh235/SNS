import styled from "../../../styles/theme-components";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "../../../hooks/common/useInfiniteScroll";
import { PostCard } from "../../main/PostCard";
import { postsActionCreator } from "../../../modules/action/posts";

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    > :nth-child(n) {
        margin-bottom: 15px;
    }
    margin-top: 15px;
`;

interface Props {}

export const PostFlexCard = ({}: Props) => {
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
        pageSize: 4,
    });

    useEffect(() => {
        dispatch(postsActionCreator.myPosts({ take: count * 4 + 4 }));
        dispatch(
            postsActionCreator.myPosts({
                take: count * 4 + 4,
            })
        );
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
        </Wrapper>
    );
};
