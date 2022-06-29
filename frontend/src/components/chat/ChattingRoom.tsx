import styled from "../../styles/theme-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setMessageList,
    setJoinRoom,
    setJoinRoomList,
    setDeleteRoom,
    setRoomList,
} from "../../modules/action/chat";
import { response, request, event } from "../../utils/socket";
import { Text } from "../common/Text";
import { Button2 } from "../common/button/Button2";

const Wrapper = styled.div`
    width: 338px;
    height: 100%;
    border-radius: 6px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    position: relative;
`;

const SideWrapper = styled.div`
    width: calc(200px - 30px);
    height: auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%);
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    right: 350px;
    display: flex;
    flex-direction: column;
    > :nth-child(n) {
        margin: 3px 0;
    }
`;

const Title = styled.div`
    width: calc(100% - 16px);
    height: 32px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    > :nth-child(2) {
        display: flex;
        flex-direction: row;
    }
`;

const MessageList = styled.div`
    width: calc(100% - 16px);
    height: 346px;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    > :nth-child(n) {
        margin: 5px 0;
    }
`;

const MyMessageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
`;

const MessageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Message = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    padding: 8px 12px;
    margin-top: 5px;
    margin-bottom: 10px;
    a {
        width: auto;
    }
`;

const ChatForm = styled.form`
    width: calc(100% - 20px);
    height: 60px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ChatInput = styled.input`
    border: 0px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.color.gray};
    width: calc(100% - 20px);
    height: 16px;
    padding: 10px;
`;

const LeaveBtn = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
`;

interface Props {
    roomId: Number;
    roomName: String;
}

export const ChattingRoom = ({ roomId, roomName }: Props) => {
    const dispatch = useDispatch();
    const scrollRef = useRef<HTMLDivElement>(null);

    const user_store = useSelector((state: any) => state.user.loginInfo);
    const { loading, data, error } = useSelector(
        (state: any) => state.chat.messageList
    );

    const [open, setOpen] = useState<boolean>(false);

    const createDom = (parent: any, tag: any, data: any) => {
        let list: any = document.getElementById(parent);
        let item = document.createElement(tag);
        if (user_store.data.email !== data.userId)
            item.innerText = `${data.nickName}${data.message}`;
        else item.innerText = `${data.message}${data.nickName}`;
        list.appendChild(item);
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
        }
    };

    const handleChatting: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const { value } = e.currentTarget.chatInput;
        request(event.chat, {
            roomId,
            userId: user_store.data.email,
            nickName: user_store.data.nickName,
            msg: value,
        });
        e.currentTarget.chatInput.value = "";
        handleScroll();
    };

    const handleLeave = () => {
        dispatch(setJoinRoom({ id: "" }));
        request(event.leave, { roomId, userId: user_store.data.email });
    };

    const handleSimple = () => {
        dispatch(setJoinRoomList({ roomId: roomId, title: roomName }));
    };

    const handleDeleteRoom = () => {
        dispatch(setDeleteRoom({ roomId }));
        dispatch(setRoomList());
        handleLeave();
    };

    useEffect(() => {
        handleScroll();
        dispatch(setMessageList({ roomId }));
        request(event.join, { roomId, userId: user_store.data.email });
        response(event.message, (data: any) => {
            createDom("chatList", "span", data);
        });
    }, []);

    return (
        <Wrapper>
            <Title>
                <Button2
                    text={`${roomName}`}
                    onClick={() => {
                        setOpen(!open);
                    }}
                />
                <div>
                    <LeaveBtn
                        onClick={() => {
                            handleSimple();
                            handleLeave();
                        }}
                    >
                        ㅡ
                    </LeaveBtn>
                    <LeaveBtn onClick={handleLeave}>X</LeaveBtn>
                </div>
            </Title>
            <MessageList id="chatList" ref={scrollRef}>
                {data?.map((val: any) => {
                    if (user_store.data.email !== val.userId)
                        return (
                            <MessageWrapper key={val._id}>
                                <Text
                                    text={val.nickName}
                                    tag={"span"}
                                    width={"auto"}
                                    fs={"15px"}
                                />
                                <Message>
                                    <Text
                                        text={val.message}
                                        tag={"span"}
                                        width={"auto"}
                                        fs={"15px"}
                                    />
                                </Message>
                            </MessageWrapper>
                        );
                    else
                        return (
                            <MyMessageWrapper key={val._id}>
                                <Message>
                                    <Text
                                        text={val.message}
                                        tag={"span"}
                                        width={"auto"}
                                        fs={"15px"}
                                    />
                                </Message>
                                <Text
                                    text={val.nickName}
                                    tag={"span"}
                                    width={"auto"}
                                    fs={"15px"}
                                />
                            </MyMessageWrapper>
                        );
                })}
            </MessageList>
            <ChatForm onSubmit={handleChatting}>
                <ChatInput name="chatInput" placeholder="Aa" autoFocus />
            </ChatForm>
            {open && (
                <SideWrapper>
                    {/* <Button2 text={"친구 초대"} width={"100%"} />
                    <Button2 text={"이름 변경"} width={"100%"} /> */}
                    <Button2
                        text={"채팅 삭제"}
                        width={"100%"}
                        onClick={handleDeleteRoom}
                    />
                </SideWrapper>
            )}
        </Wrapper>
    );
};
