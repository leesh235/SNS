import styled from "../styles/theme-components";
import { useEffect } from "react";
import { batch, useDispatch } from "react-redux";
//fucntions
import { friendsActionCreator } from "../modules/action/friends";
import { useMenuFunc } from "../hooks/common/useMenuFunc";
//components
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
    const { selected, handleMenuClick } = useMenuFunc({ defaultValue: 0 });

    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(friendsActionCreator.allList());
            dispatch(friendsActionCreator.requestList());
            dispatch(friendsActionCreator.responseList());
            dispatch(friendsActionCreator.friendList());
        });
    }, [selected]);

    return (
        <Wrapper>
            <FriendsSide menu={+selected} handleMenu={handleMenuClick} />
            <FlexWrapper>
                {+selected === 0 && (
                    <FriendsHome handleMenu={handleMenuClick} />
                )}
                {+selected === 1 && <Request />}
                {+selected === 2 && <Response />}
                {+selected === 3 && <FriendList />}
                {+selected === 4 && <BithdayList />}
            </FlexWrapper>
        </Wrapper>
    );
};

export default Friends;
