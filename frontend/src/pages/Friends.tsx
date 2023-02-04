import styled from "../styles/theme-components";
import { useState, useEffect } from "react";
import { batch, useDispatch } from "react-redux";
import { friendsActionCreator } from "../modules/action/friends";
import { FriendsSide } from "../components/friends/FriendsSide";
import { FriendsHome } from "../components/friends/FriendsHome";
import { Request } from "../components/friends/Request";
import { Response } from "../components/friends/Response";
import { FriendList } from "../components/friends/FriendList";
import { BithdayList } from "../components/friends/BithdayList";

const Wrapper = styled.main`
    background-color: ${(props) => props.theme.color.gray};
    width: 100%;
    min-height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: minmax(auto, 360px) auto;
    padding-top: 56px;
`;

const FlexWrapper = styled.section`
    width: 100%;
    min-height: 100%;
    padding: 40px 36px 20px 36px;
`;

const Friends = () => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState<number>(0);

    const handleMenu = (id: number) => {
        setMenu(id);
    };

    useEffect(() => {
        batch(() => {
            dispatch(friendsActionCreator.allList());
            dispatch(friendsActionCreator.requestList());
            dispatch(friendsActionCreator.responseList());
            dispatch(friendsActionCreator.friendList());
        });
    }, [menu]);

    return (
        <Wrapper>
            <FriendsSide menu={menu} handleMenu={handleMenu} />
            <FlexWrapper>
                {menu === 0 && <FriendsHome handleMenu={handleMenu} />}
                {menu === 1 && <Request />}
                {menu === 2 && <Response />}
                {menu === 3 && <FriendList />}
                {menu === 4 && <BithdayList />}
            </FlexWrapper>
        </Wrapper>
    );
};

export default Friends;
