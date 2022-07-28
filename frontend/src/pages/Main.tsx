import styled from "../styles/theme-components";
import { useEffect } from "react";
import { batch, useDispatch } from "react-redux";
import { setRoomList } from "../modules/action/chat";
import { setAllPosts } from "../modules/action/posts";
import { setPostDetails } from "../modules/action/post";
import { SideMenu } from "../components/side/SideMenu";
import { PostList } from "../components/main/PostList";
import { ChattingList } from "../components/main/ChattingList";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: minmax(auto, 360px) auto minmax(auto, 360px);
    padding-top: 56px;
    > :nth-child(2) {
        justify-items: center;
        grid-column: 2 / span 1;
    }
`;

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(setPostDetails());
            dispatch(setRoomList());
        });
    }, []);

    return (
        <Wrapper>
            <SideMenu />
            <PostList />
            <ChattingList />
        </Wrapper>
    );
};

export default Main;
