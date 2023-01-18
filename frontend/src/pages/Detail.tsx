import styled from "../styles/theme-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { postActionCreator } from "../modules/action/post";
import { commentActionCreator } from "../modules/action/comment";
import { ImageView } from "../components/detail/ImageView";
import { TextView } from "../components/detail/TextView";

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    display: grid;
    grid-template-columns: 75% 25%;
`;

const Detail = () => {
    const { postId } = useParams<{ postId: string }>();

    const dispatch = useDispatch();

    useEffect(() => {
        if (postId) {
            dispatch(postActionCreator.detail({ postId: Number(postId) }));
            dispatch(commentActionCreator.list({ postId: Number(postId) }));
        }
    }, []);

    return (
        <Wrapper>
            <ImageView />
            <TextView postId={postId} />
        </Wrapper>
    );
};

export default Detail;
