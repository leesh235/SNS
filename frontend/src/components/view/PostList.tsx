import styled from "../../styles/theme-components";
import { PostCard } from "../card/PostCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../modules/action/posts";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, auto);
    row-gap: 20px;
    align-items: center;
    padding: 0 20px;
    margin-top: 16px;
`;

const postList = [
    "1",
    "2",
    "3",
    "4",
    "2",
    "3",
    "4",
    "2",
    "3",
    "4",
    "2",
    "3",
    "4",
];

export const PostList = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(
        (state: any) => state.posts.allPosts
    );

    const [postList, setPostList] = useState<Array<any>>([]);

    useEffect(() => {
        if (data === null) {
            dispatch(setAllPosts());
        }
        setPostList(data);
    }, [loading]);

    return (
        <Wrapper>
            {postList?.map((val, idx) => {
                return <PostCard key={idx} post={val} />;
            })}
        </Wrapper>
    );
};
