import theme from "../../styles/theme";
import styled from "../../styles/theme-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageList } from "../../modules/action/chat";
import { response, request, event } from "../../utils/socket";

const Wrapper = styled.div`
    width: 360px;
    height: 460px;
    border-radius: 18px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Message = styled.div`
    width: 100%;
    /* height: calc(100% - 80px); */
    max-height: 380px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow-x: hidden;
    overflow-y: auto;
`;

const Chatting = styled.form`
    width: 100%;
    height: 40px;
    > input {
        width: 100%;
        height: 100%;
    }
`;

const LeaveBtn = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

interface Props {
    roomId: Number;
    roomName: String;
    closeFunc: any;
}

export const ChattingRoom = ({ roomId, roomName, closeFunc }: Props) => {
    const dispatch = useDispatch();

    const user_store = useSelector((state: any) => state.profile.profile);
    const { loading, data, error } = useSelector(
        (state: any) => state.chat.messageList
    );

    const createDom = (parent: any, tag: any, data: any) => {
        let list: any = document.getElementById(parent);
        let item = document.createElement(tag);
        item.innerText = data;
        list.appendChild(item);
    };

    const handleChatting: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const { value } = e.currentTarget.chatInput;
        request(event.chat, {
            roomId,
            userId: user_store.data.email,
            msg: value,
        });
        e.currentTarget.chatInput.value = "";
    };

    const handleLeave = () => {
        closeFunc();
        request(event.leave, { roomId, userId: user_store.data.email });
    };

    useEffect(() => {
        dispatch(setMessageList({ roomId }));
        request(event.join, { roomId, userId: user_store.data.email });
        response(event.message, (data: any) => {
            createDom("chatList", "div", data);
        });
        console.log(data);
    }, []);

    return (
        <Wrapper>
            <Title>
                <div>{roomName}</div>
                <LeaveBtn onClick={handleLeave}>X</LeaveBtn>
            </Title>
            <Message id="chatList">
                {data.map((val: any) => {
                    return (
                        <div key={val._id}>
                            {val.nickName}:{val.message}
                        </div>
                    );
                })}
            </Message>
            <Chatting onSubmit={handleChatting}>
                <input name="chatInput" />
            </Chatting>
        </Wrapper>
    );
};
