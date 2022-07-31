import styled from "../styles/theme-components";
import { useEffect, useState } from "react";
import { SideMenu } from "../components/side/SideMenu";
import { PostList } from "../components/main/PostList";
import { ChattingList } from "../components/main/ChattingList";
import { useLocation } from "react-router-dom";

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
    const location = useLocation();
    const init: number = location.state !== null ? Number(location.state) : 1;
    const [menu, setMenu] = useState<number>(init);
    const handleMenu = (id: number) => {
        setMenu(id);
    };

    useEffect(() => {
        console.log(menu);
    }, [menu]);

    return (
        <Wrapper>
            <SideMenu handleMenu={handleMenu} />
            <PostList />
            <ChattingList />
        </Wrapper>
    );
};

export default Main;
