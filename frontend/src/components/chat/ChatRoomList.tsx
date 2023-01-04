import styled from "../../styles/theme-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ChattingRoom } from "./ChattingRoom";
import { chatActionCreator } from "../../modules/action/chat";
import { ChatIcon } from "./ChatIcon";

const Wrapper = styled.section`
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    width: auto;
    height: 455px;
`;

const ChatIconList = styled.section`
    width: 50px;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    margin: 20px;
`;

const ChatRoomIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    margin-top: 10px;
    cursor: pointer;
`;

export const ChatRoomList = () => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.chat.roomList
    );
    const simpleRoomList = useSelector((state: any) => state.chat.joinRoomList);
    const store_room = useSelector((state: any) => state.chat.joinRoom);

    useEffect(() => {
        dispatch(chatActionCreator.roomList());
    }, [store_room]);

    return (
        <>
            <Wrapper>
                {data?.map((val: any, idx: number) => {
                    if (store_room?.id === val._id) {
                        return (
                            <ChattingRoom
                                key={val._id}
                                roomId={val._id}
                                roomName={val.title}
                            />
                        );
                    }
                })}
                <ChatIconList>
                    <ChatRoomIcon>set</ChatRoomIcon>
                    {simpleRoomList?.map((val: any, idx: number) => {
                        if (store_room.id !== val.roomId)
                            return (
                                <ChatIcon
                                    key={val.roomId}
                                    id={val.roomId}
                                    title={val.title}
                                />
                            );
                    })}
                </ChatIconList>
            </Wrapper>
        </>
    );
};
