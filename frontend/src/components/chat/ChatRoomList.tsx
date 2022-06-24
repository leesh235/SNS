import styled from "../../styles/theme-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ChattingRoom } from "./ChattingRoom";
import { setRoomList } from "../../modules/action/chat";

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

const ChatRoomWrapper = styled.section`
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
    border-radius: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
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
        dispatch(setRoomList());
    }, [store_room]);

    return (
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
            <ChatRoomWrapper>
                <ChatRoomIcon>set</ChatRoomIcon>
                {simpleRoomList?.map((val: any, idx: number) => {
                    if (store_room.id !== val)
                        return <ChatRoomIcon key={idx}>{idx}</ChatRoomIcon>;
                })}
            </ChatRoomWrapper>
        </Wrapper>
    );
};
